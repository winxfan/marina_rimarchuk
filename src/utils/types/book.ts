import { ReactNode } from 'react';

export interface IBookContentList {
    title: string;
}

export interface IBookBlock {
    id: string | number;
    title: string | ReactNode;
    image: string;
    description: string;
    descriptionPrice?: string;
    price: string;
    buttonText?: string;
    buttonBuy?: string;
    contentTitle?: string;
    contentInfo?: string;
    contentList?: IBookContentList[];
    onClick?: () => void;
}
