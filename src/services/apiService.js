/* eslint-disable no-param-reassign */
import axios from 'axios';
import { toast } from 'react-toastify';
import { APP_SESSION_STORAGE_KEY } from './constantsService';

const baseURL = `${process.env.REACT_APP_API_URL}${process.env.REACT_APP_API_PATH}`;

export const appAxios = axios.create({
  baseURL,
  timeout: 40000,
});

const handleLogout = async () => {
  localStorage.removeItem(APP_SESSION_STORAGE_KEY);
  window.location.href = '/';
};

appAxios.interceptors.request.use(
  (config) => {
    const sessoinData = localStorage.getItem(APP_SESSION_STORAGE_KEY);
    const authToken = sessoinData && JSON.parse(sessoinData).authToken;

    config.headers.Authorization = `Bearer `;
    if (authToken) {
      config.headers.Authorization = `Bearer ${authToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

appAxios.interceptors.response.use(
  (response) => {
    return response.data || response;
  },
  (error) => {
    if (error.response) {
      const { response } = error;
      if (response.status === 401) {
        toast.error(`Unauthorized.`);
        handleLogout();
      }

      const apiErrorMsgs = response.data?.errors?.messages;
      if (apiErrorMsgs?.length) {
        apiErrorMsgs.forEach((msg) => toast.error(msg));
        error.wasHandled = true;
      }
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.error(error);
      throw new Error(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error(error);
      throw new Error(error.message);
    }
    return Promise.reject(error);
  },
);
