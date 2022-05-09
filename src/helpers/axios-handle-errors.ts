import axios, { AxiosError } from "axios"

export const handleError = (err: Error | AxiosError) => {
    let messageError = '';
    if (axios.isAxiosError(err)){
        if(err?.response?.data?.errors){
            const { errors } = err.response.data;
            if(typeof errors === 'string'){
                messageError = errors;
            }
            else if(Array.isArray(errors)){
                messageError = errors.join(', ');
            }else{
                messageError = `Server didn't send an error message`
            }
        }else{
            messageError = 'Something went wrong';
        }
    } else {
        messageError = 'Something happened in setting up the request that triggered an Error';
    }

    return Promise.reject(messageError);
}