import axios, { AxiosInstance } from 'axios';

export const usersHttpClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_USERS_API_BASE_URL,
  withCredentials: false,
  headers: {
    'Content-Type': 'application/json',
  },
});

// usersHttpClient.interceptors.request.use(function (config: any) {
//   const user = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) ?? "{}");
//   config.headers.Authorization = `Bearer ${user?.access_token}`;
//   return config;
// });
