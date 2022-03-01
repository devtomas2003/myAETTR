import axios from 'axios';
export const api = axios.create({
    baseURL: 'http://127.0.0.1:8081',
});
export const apiSAU = axios.create({
    baseURL: 'http://127.0.0.1:8080',
});