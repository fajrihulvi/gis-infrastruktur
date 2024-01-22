import axios from 'axios';
import config from './config';

// Setup general axios config
export const setupGeneralAxios = () => {
  axios.defaults.baseURL = config.BASE_URL;
};

// Setup axios optional instances
