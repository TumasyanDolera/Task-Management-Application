import axios from "axios"
import { getAccessToken } from "../../helpers";
import { refresh_token } from "../../hooks/useRefresh";
import { setToken } from "../../helpers/cookies";
import { removeAccessToken } from "../../helpers/cookies";
import { Token } from "../../models/iAuthState";

const BASE_API_URL = import.meta.env.VITE_REACT_API_URL

const ApiAxios = axios.create({
  baseURL: BASE_API_URL,
  headers: {
    "Content-Type": " application/json",
    'Accept': 'application/json',
  },
}
)

ApiAxios.interceptors.request.use(
  function (config) {
    const accessToken = getAccessToken(Token.accessToken);
    config.headers.Authorization = `Bearer ${accessToken}`;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

ApiAxios.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    try {
      const originalRequest = error.config;
      if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        const refreshToken = getAccessToken(Token.refreshToken);
        return refresh_token(refreshToken).then((response) => {
          setToken(Token.accessToken, response.data.data.accessToken, true);
          setToken(Token.refreshToken, response.data.data.refreshToken, true);
          originalRequest.headers.Authorization = `Bearer ${getAccessToken(
            Token.accessToken
          )}`;
          return axios(originalRequest);
        });
      }
    } catch (error) {
      console.error('Error during refresh:', error);
      removeAccessToken();
      return Promise.reject(error);
    }
  }
);

export default ApiAxios;




