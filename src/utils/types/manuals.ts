import { IBookContentList } from './book';

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
    price: string;
    buy?: boolean;
}
