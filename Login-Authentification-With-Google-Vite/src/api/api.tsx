import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://complete-api-in-nodejs-firebase-auth.onrender.com/',
    withCredentials: true
});