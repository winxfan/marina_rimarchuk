import axios from '@/axios';
import { Videos } from '@/utils/types/videos';

export const getAllVideosRequest = async (): Promise<Videos[]> => {
    const response = await axios.get(`/api/videos/getall`);
    console.log({videos: response})
    return response.data.data ?? [];
};
