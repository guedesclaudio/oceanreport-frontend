import axios from 'axios';
import { baseUrl } from '../BaseUrlApi';

function get() {
  return axios.get(`${baseUrl}/posts`);
}

function post(body: any, config: any) {
    return axios.post(`${baseUrl}/posts`, body, config);
}

const postsApi = {
  get,
  post
};

export default postsApi;
