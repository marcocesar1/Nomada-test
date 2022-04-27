import axios from 'axios';
import { handleError } from '../helpers/axios-handle-errors';

const nomadaUrl = 'https://whois.nomada.cloud/upload';
const moviesUrl = 'https://api.themoviedb.org/3/search/person';

const nomadaKey = process.env.REACT_APP_NOMADA_KEY || '';
const moviesKey = process.env.REACT_APP_MOVIEDB_KEY || '';

export const sendFile = <T>(data: any) => 
        axios.post<T>(nomadaUrl, data, {
            headers: {
                'Nomada': nomadaKey
            }
        }).then(resp => resp.data).catch(handleError);

export const searchPerson = <T>(query: string) => 
        axios.get<T>(moviesUrl, {
            params: {
                api_key: moviesKey,
                query,
                language: 'es'
            }
        }).then(resp => resp.data).catch(handleError);