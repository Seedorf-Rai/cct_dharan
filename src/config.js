import axios from 'axios';
const instance = axios.create({
    baseURL: 'https://cct.codeitapps.com/api',
  });
  export default instance;