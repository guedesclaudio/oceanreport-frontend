import axios from 'axios';
import { CreateUser, LoginUser } from '../../Types/types';

const baseUrl = 'http://localhost:4000';

function postUser(userData: CreateUser) {
  return axios.post(`${baseUrl}/users`, userData);
}

function loginUser(userDataLogin: LoginUser) {
  return axios.post(`${baseUrl}/users/signin`, userDataLogin);
}

const api = {
  postUser,
  loginUser
};

export default api;
