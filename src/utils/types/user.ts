import { LoadingStatus } from '../../constants';

export type User = {
    userId: number;
    userName: string;
    waterMl: number;
};

export type AllUsers = {
    data: User[];
    status: LoadingStatus;
};
