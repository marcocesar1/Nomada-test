import axios, { AxiosError } from "axios"

export const handleError = (err: Error | AxiosError) => {
    if (axios.isAxiosError(err)){
        if(err?.response?.data?.errors){
            const { errors } = err.response.data;
            if(typeof errors === 'string') return errors;
            else if(Array.isArray(errors)) return errors.join(', ');
            return `Server didn't send an error message`;
        }
        return 'Something went wrong';
    } else {
        return 'Something happened in setting up the request that triggered an Error';
    }
}