import axios from 'axios';
import config from '../config/config.js';
export default axios.create({
  baseURL: `${config.baseURL}/`,
  headers: {
    'Content-Type': 'application/json'
  }
});
