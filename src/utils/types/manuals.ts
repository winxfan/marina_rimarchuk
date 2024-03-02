import { LoadingStatus } from '@/constants';
import { IBookContentList } from '@/utils/types/book';

export interface IManuals {
    id: string | number;
    title: string;
    description: string;
    icon?: string;
    image?: string;
    contentTitle?: string;
    contentInfo?: string;
    contentList?: IBookContentList[];
    buttonText?: string;
    buttonBuy?: string;
    price?: string;
    buy?: boolean;
}

export type AllManuals = {
    data: Manuals[];
    status: LoadingStatus;
    error: LoadingStatus;
};

export type Manuals = {
    id: string | number;
    name: string;
    description: string;
    cost: number;
    url_file: string;
};

export type ManualResponse = {
    data: Manuals;
    status: LoadingStatus;
    error: LoadingStatus;
};

export type AllManualsResponse = {
    manuals: AllManuals;
};

export type ManualsGetResponse = {
    manualsGet: ManualResponse;
};
