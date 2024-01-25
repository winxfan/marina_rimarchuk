import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import imageSrc from '../../../../assets/images/bookBlock/book.png';
import { IBookBlock } from '../../../../utils/types/book';
import css from './BookCard.module.scss';

export type BookCardProps = IBookBlock & {
    className?: any;
    index?: number;
};

export const BookCard: FC<BookCardProps> = (props) => {
    const { className, title, description, index, id, onClick } = props;

    return (
        <div className={className}>
            <div className={css.bookCard} data-index={index}>
                <img src={imageSrc} className={css.bookImage} alt="book" />

                <div className={css.bookInfo}>
                    <div className={css.bookTitle}>{title}</div>
                    <div className={css.bookDescription}>{description}</div>
                    <Link to={`/book/${id}`} className={css.linkBook} onClick={onClick}>
                        <div className={css.bookWrapper}>
                            <span className={css.bookDetails}>Подробнее</span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};
