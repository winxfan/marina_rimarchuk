import React from 'react';

import CardSlider from '../../../modules/slider/CardSlider';
import scss from '../../../modules/slider/CardSlider.module.scss';
import css from './BookBlock.module.scss';
import { BookCard } from './parts/BookCard';

export const BookBlock = () => {
    return (
        <div className={css.bookBlock}>
            <CardSlider isVideoBlock={true}>
                <BookCard
                    className={css.cardBackground}
                    title={
                        <>
                            <div>
                                Книга <span className={css.bookPart}>«Будь здоровым сейчас»</span> + личная консультация
                            </div>
                        </>
                    }
                    description="Энергию и ресурс не надо искать - это есть в нашем теле."
                />
                <BookCard
                    className={css.cardBackground}
                    title={
                        <>
                            <div>
                                Книга <span className={css.bookPart}>«Будь здоровым сейчас»</span> + личная консультация
                            </div>
                        </>
                    }
                    description="Энергию и ресурс не надо искать - это есть в нашем теле."
                />
                <BookCard
                    className={css.cardBackground}
                    title={
                        <>
                            <div>
                                Книга <span className={css.bookPart}>«Будь здоровым сейчас»</span> + личная консультация
                            </div>
                        </>
                    }
                    description="Энергию и ресурс не надо искать - это есть в нашем теле."
                />
                <BookCard
                    className={css.cardBackground}
                    title={
                        <>
                            <div>
                                Книга <span className={css.bookPart}>«Будь здоровым сейчас»</span> + личная консультация
                            </div>
                        </>
                    }
                    description="Энергию и ресурс не надо искать - это есть в нашем теле."
                />
            </CardSlider>
        </div>
    );
};
