import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";

// Create Axios instance with base configuration
const axiosClient: AxiosInstance = axios.create({
  // baseURL: "http://localhost:5000",
  baseURL: "https://event-server-360.vercel.app/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// response interceptor to handle common logic
axiosClient.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    const res = error.response;
    console.error(`Something went wrong. Status Code: ${res?.status}`);
    return Promise.reject(error);
  }
);

export default axiosClient;
