import { LoadingStatus } from '@/constants';

export type WaterData = {
    data: number;
    status: LoadingStatus;
    error: LoadingStatus;
};

export type GetWaterResponse = {
    waterGet: WaterData;
};

export type AddWaterResponse = {
    message: string;
    status: LoadingStatus;
    error: LoadingStatus;
};

export type AddWater = {
    user_id: string | number;
    water_ml: number;
};
