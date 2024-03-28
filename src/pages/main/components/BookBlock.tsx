import React from 'react';

import bookOneSrc from '@/assets/images/bookBlock/book.png';
import bookThree from '@/assets/images/bookBlock/bookThree.png';
import bookTwoSrc from '@/assets/images/bookBlock/bookTwo.png';
import CardSlider from '@/modules/slider/CardSlider';
import { IBookBlock } from '@/utils/types/book';

import css from './BookBlock.module.scss';
import { BookCard } from './parts/BookCard';

export const data: IBookBlock[] = [
    {
        id: '1',
        title: (
            <div>
                <span className={css.bookTitleCard}>I’M LEGEND</span>
            </div>
        ),
        contentTitle: 'Книга «Будь здоровым сейчас» + личная консультация',
        contentInfo: 'Консультация в подарок:\n' + 'Детская или взрослая (Стоимостью 5000 ₽)',
        contentList: [
            {
                title: 'разбор/назначение анализов',
            },
            {
                title: 'индивидуальный подбор схемы восстановления здоровья',
            },
            {
                title: 'рекомендации по витаминам и добавкам',
            },
            {
                title: 'рекомендации по питанию',
            },
        ],
        descriptionPrice: 'Стоимость печатной книги + консультации',
        price: '5 990 ₽',
        buttonText: 'Стоимость печатной книги + консультации',
        buttonBuy: 'Купить',
        description: 'Твоё перерождение',
        image: bookOneSrc,
    },
    {
        id: '2',
        title: 'Личная консультация от Марины Римарчук',
        contentTitle: 'Личная консультация от Марины Римарчук',
        contentInfo: 'Энергию и ресурс не надо искать - это есть в нашем теле.',
        descriptionPrice: 'Стоимость',
        price: '5 990 ₽',
        buttonText: 'Стоимость',
        buttonBuy: 'Купить',
        description: 'Энергию и ресурс не надо искать - это есть в нашем теле.',
        image: bookTwoSrc,
    },
    {
        id: '3',
        title: 'Личная консультация от Марины Римарчук',
        contentTitle: 'Книга «Будь здоровым сейчас» + личная консультация',
        contentInfo: 'Консультация в подарок:\n' + 'Детская или взрослая (Стоимостью 5000 ₽)',
        contentList: [
            {
                title: 'разбор/назначение анализов',
            },
            {
                title: 'индивидуальный подбор схемы восстановления здоровья',
            },
            {
                title: 'рекомендации по витаминам и добавкам',
            },
            {
                title: 'рекомендации по питанию',
            },
        ],
        descriptionPrice: 'Стоимость печатной книги + консультации',
        price: '5 990 ₽',
        buttonText: 'Стоимость печатной книги + консультации',
        buttonBuy: 'Купить',
        description: 'Энергию и ресурс не надо искать - это есть в нашем теле.',
        image: bookThree,
    },
];

export const BookBlock = () => {
    return (
        <div className={css.bookBlock}>
            <CardSlider slidesToShowMobile={1.05} slidesToShow={1.05}>
                {data?.map((item, index) => (
                    <BookCard key={item.id} {...item} index={index} />
                ))}
            </CardSlider>
        </div>
    );
};
