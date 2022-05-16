import axios, { AxiosRequestConfig } from "axios";
import { YELP_API_KEY } from "@env-vars";

export const client = axios.create({
  baseURL: 'https://pacific-eyrie-96624.herokuapp.com/https://api.yelp.com/v3',
  validateStatus: (status) => (status >= 200 && status <= 404) || status <= 500
});

client.interceptors.request.use(
  async (req: AxiosRequestConfig) => {
    req.headers = {
        Authorization: `Bearer ${YELP_API_KEY}`,
        'X-Requested-With': 'XMLHttpRequest',
        ...req.headers
      };
    return req;
  },

  (error) => Promise.reject(error)
);

client.interceptors.response.use((res) => {
    return res;
  },
  (error) => Promise.reject(error)
);