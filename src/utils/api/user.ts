import axios from '../../axios';
import { HttpResponse, IUser } from '../types';

export type GetUserRequestParams = Pick<IUser, 'id'>;
export const getUserRequest = async ({ id }: GetUserRequestParams): Promise<HttpResponse<IUser>> => {
    const response = await axios.get(`api/user/${id}/`);
    return response.data;
};
