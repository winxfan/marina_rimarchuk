import axios from '@/axios';
import { User, UserMessage } from '@/utils/types';
import { AddWater, GetWaterResponse, WaterData } from '@/utils/types/water';

export const waterGet = async (): Promise<WaterData> => {
    const response = await axios.get(`/api/water/getml`);
    return response.data;
};

export const addWaterRequest = async ({ user_id, water_ml }: AddWater): Promise<UserMessage> => {
    const response = await axios.post(`/api/water/addml?user_id=${user_id}&water_ml=${water_ml}`);
    return response.data;
};
