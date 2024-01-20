import axios from "../../axios";
import {HttpResponse, IUser} from "../types";

export interface GetUserRequestParams extends Pick<IUser, 'id'> {}
export const getUserRequest = async ({id}: GetUserRequestParams): Promise<HttpResponse<IUser>> => {
	const response = await axios.get(`api/user/${id}/`);
	return response.data;
};