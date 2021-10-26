import axios from 'axios';

export const http = axios.create({
    baseURL: 'https://api-rest-album-figurinha.herokuapp.com/api'
});