import React, { FC, ReactNode } from 'react';
import Slider, { type Settings } from 'react-slick';

import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import css from './CardSlider.module.scss';

export type CardSliderProps = {
    children: ReactNode;
    slidesToShow?: number;
};

const CardSlider: FC<CardSliderProps> = (props) => {
    const { children, slidesToShow = 2 } = props;

    const settings: Settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow,
        // slidesToScroll: slidesToShow / 2,
        arrows: false,
        swipeToSlide: true,
    };

    return (
        <Slider {...settings} className={css.CardSlider}>
            {children}
        </Slider>
    );
};

export default CardSlider;
