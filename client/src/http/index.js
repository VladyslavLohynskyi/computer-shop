import axios from "axios";
import { HTTP_ADDRESS } from "../utils/consts";

const $host = axios.create({
  baseURL: HTTP_ADDRESS,
});

const $authHost = axios.create({
  baseURL: HTTP_ADDRESS,
});

const authInterceptor = (config) => {
  config.headers.authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
};

$authHost.interceptors.request.use(authInterceptor);

export { $host, $authHost };
