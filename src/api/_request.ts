import axios, { AxiosError, Method } from "axios";
import { CONFIG } from "../config/config";
import api from "./_api";
const md5 = require("md5");

interface IRequest {
  method: Method;
  endpoint: string;
}

const request = async (data: IRequest) => {
  let token: string | null = localStorage.getItem(`bearer_token`);

  if (token === null) {
    const tokenresult = await api.authentication.getBearertoken();

    if (tokenresult) {
      localStorage.setItem(`bearer_token`, tokenresult);
    }
  }

  const headers = {
    Authorization: `Bearer ${localStorage.getItem(`bearer_token`)}`,
  };

  const axiosInstance = axios.create({
    baseURL: CONFIG.API.BASE_URL,
    timeout: 10000,
    headers,
  });

  axiosInstance.interceptors.response.use(
    (response) => response,
    (error: AxiosError): Promise<AxiosError> => {
      if (error.response !== undefined) {
        if (error.response.status === 401) {
          localStorage.removeItem(`bearer_token`);
          window.location.reload();
        }
      }
      return Promise.reject(error);
    }
  );

  const result = await axiosInstance.request({
    method: data.method,
    url: data.endpoint,
  });

  return result.data;
};

export default request;
