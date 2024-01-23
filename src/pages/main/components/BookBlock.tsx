import React from 'react';

import CardSlider from '../../../modules/slider/CardSlider';
import { IBookBlock } from '../../../utils/types/book';
import css from './BookBlock.module.scss';
import { BookCard } from './parts/BookCard';

export const data: IBookBlock[] = [
    {
        id: 1,
        title: (
            <div>
                Книга <span className={css.bookPart}>«Будь здоровым сейчас» </span>+личная консультация
            </div>
        ),
        description: 'Энергию и ресурс не надо искать - это есть в нашем теле.',
        image: '',
    },
    {
        id: 2,
        title: (
            <div>
                Книга <span className={css.bookPart}>«Будь здоровым сейчас» </span>+личная консультация
            </div>
        ),
        description: 'Энергию и ресурс не надо искать - это есть в нашем теле.',
        image: '',
    },
    {
        id: 3,
        title: (
            <div>
                Книга <span className={css.bookPart}>«Будь здоровым сейчас» </span>+личная консультация
            </div>
        ),
        description: 'Энергию и ресурс не надо искать - это есть в нашем теле.',
        image: '',
    },
    {
        id: 4,
        title: (
            <div>
                Книга <span className={css.bookPart}>«Будь здоровым сейчас» </span>+личная консультация
            </div>
        ),
        description: 'Энергию и ресурс не надо искать - это есть в нашем теле.',
        image: '',
    },
];

export const BookBlock = () => {
    return (
        <div className={css.bookBlock}>
            <CardSlider isVideoBlock={true}>
                {data?.map((item, index) => (
                    <BookCard key={item.id} {...item} index={index} />
                ))}
            </CardSlider>
        </div>
    );
};
