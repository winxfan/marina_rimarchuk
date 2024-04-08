import { LoadingStatus } from '@/constants';
import { User } from '@/utils/types/user';

export type Pay = {
    customer_phone: string;
    customer_email: string;
    cost: number;
    course_id?: number;
    manuals_id?: number;
};

export type PayMessage = {
    pay_url: string;
};

export type PayResponse = {
    pay_url: string;
    status: LoadingStatus;
    error: LoadingStatus;
};
