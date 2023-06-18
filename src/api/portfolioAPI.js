import axios from "axios";
import { getENV } from '../helpers/getENV';

const { VITE_API_URL } = getENV();

const portfolioAPI = axios.create({
    baseURL: VITE_API_URL
});

portfolioAPI.interceptors.request.use( config => {

    config.headers = {
        ...config.headers,
        'x-token': localStorage.getItem('token')
    }

    return config
});

export default portfolioAPI;