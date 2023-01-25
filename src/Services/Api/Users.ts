import axios from 'axios';
import { CreateUser } from '../../Types/types';

const baseUrl = 'http://localhost:4000';

function postUser(userData: CreateUser) {
  return axios.post(`${baseUrl}/users`, userData);
}

const api = {
  postUser
};

export default api;
