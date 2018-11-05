import axios from 'axios'
import { API_HOST } from 'constants/index';

const endpoint = '/api/brief';

export function submitBrief(data) {
  // return axios.post(`${API_HOST}${endpoint}`, data, {
  return axios.post(`${endpoint}`, data, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
}
