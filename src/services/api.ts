import axios from 'axios';
import { handleError } from '../helpers/axios-handle-errors';

const nomadaUrl = 'https://whois.nomada.cloud/upload';
const moviesUrl = 'https://api.themoviedb.org/3/search/person?';

export const sendFile = <T>(data: any) => 
        axios.post<T>(nomadaUrl, data, {
            headers: {
                'Nomada': 'ZjUyNTI1OGEtYWYxMC00NzI4LTlhYTYtYTg0NDU5OTdhMjIx'
            }
        }).then(resp => resp.data).catch(handleError);

export const searchPerson = <T>(query: string) => 
        axios.get<T>(moviesUrl, {
            params: {
                api_key: 'df7f7008129612db90bc077f7bf3ebbd',
                query,
                language: 'es'
            }
        }).then(resp => resp.data).catch(handleError);