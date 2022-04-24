import axios from 'axios';

const nomadaUrl = 'https://whois.nomada.cloud/upload';
const headers = {
    'Nomada': 'ZjUyNTI1OGEtYWYxMC00NzI4LTlhYTYtYTg0NDU5OTdhMjIx'
}

export const sendFile = <T>(data: any) => 
        axios.post<T>(nomadaUrl, data, { headers }).then(resp => resp.data)