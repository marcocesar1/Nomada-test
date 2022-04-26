import axios, { AxiosError } from "axios"

export const handleError = (err: Error | AxiosError) => {
    if (axios.isAxiosError(err)){
        if(err?.response?.data?.errors){
            const { errors } = err.response.data;
            if(typeof errors === 'string') throw errors;
            else if(Array.isArray(errors)) throw errors.join(', ');
            else throw `Server didn't send an error message`;
        }
        throw 'Something went wrong';
    } else {
        throw 'Something happened in setting up the request that triggered an Error';
    }
}