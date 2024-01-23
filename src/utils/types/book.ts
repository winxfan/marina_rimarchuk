import { ReactNode } from 'react';

export interface IBookBlock {
    id: string | number;
    title: string | ReactNode;
    image: string;
    description: string;
}
