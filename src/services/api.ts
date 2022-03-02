import axios from 'axios';
export const api = axios.create({
    baseURL: 'http://192.168.1.10:8081',
});
export const apiSAU = axios.create({
    baseURL: 'http://192.168.1.10:8080',
});