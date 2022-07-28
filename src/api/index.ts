import axios from 'axios';

const service = axios.create({
    baseURL: 'http://api.bgm.tv',
    withCredentials: true,
    timeout: 10000
})

service.interceptors.request.use((config) => {
    return config
}, (error) => {
    console.log(error);
    
})

service.interceptors.response.use((response) => {
    return response.data
}, (error) => {
    console.log(error);
})

export default service;