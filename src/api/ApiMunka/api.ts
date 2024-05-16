import axios, { AxiosInstance, AxiosResponse } from 'axios';

const api: AxiosInstance = axios.create({
  baseURL: 'http://127.0.0.1:5000/api',
});

export default api;

export const handleResponse = (response: AxiosResponse<any>) => response.data;

