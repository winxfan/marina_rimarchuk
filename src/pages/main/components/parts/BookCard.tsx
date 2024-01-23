import { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';

import css from './BookCard.module.scss';

export type BookCardProps = {
    className?: any;
    title?: string | ReactNode;
    description: string;
    index?: number;
};

export const BookCard: FC<BookCardProps> = (props) => {
    const { className, title, description, index } = props;

    return (
        <div className={className}>
            <div className={css.bookCard} data-index={index}>
                <div className={css.bookImage} data-index={index}></div>
                <div className={css.bookInfo}>
                    <div className={css.bookTitle}>{title}</div>
                    <div className={css.bookDescription}>{description}</div>
                    <Link to="/" className={css.linkBook}>
                        <div className={css.bookWrapper}>
                            <span className={css.bookDetails}>Подробнее</span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};
