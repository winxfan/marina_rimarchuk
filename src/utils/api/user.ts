import axios from '@/axios';

import { HttpResponse, User } from '../types';

export const getAllUsersRequest = async (): Promise<HttpResponse<User>> => {
    const response = await axios.get(`/api/users/getall`);
    return response.data;
};
