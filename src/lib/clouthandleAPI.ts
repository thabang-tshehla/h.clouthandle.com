import axios from 'axios';

const apiAuthToken = process.env.CLOUTHANDLE_API_AUTH_TOKEN

const clouthandleAPI = axios.create({
  baseURL: 'https://api.clouthandle.com/',
  withCredentials: true,
  headers: {
    'Authorization': `Bearer ${apiAuthToken}`,
    'Content-Type': 'application/json',
  },
});

export default clouthandleAPI;