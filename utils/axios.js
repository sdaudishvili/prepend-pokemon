import axios from 'axios';

export const axiosRemote = axios.create({
  timeout: 3000
});
