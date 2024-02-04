import axios from 'axios';

// import { SERVER_URL } from './utils/constants';
import { getCookie } from './utils/helpers/cookie';

const instance = axios.create({
    baseURL: 'http://example.ru',
});

instance.interceptors.request.use((config) => {
    const authToken = getCookie('authToken');
    config.headers.authToken = authToken;

    return config;
});

export default instance;
