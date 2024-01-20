import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import { MeditationCard } from '../../pages/main/components/parts/MeditationCard';
import css from './CardSlider.module.scss';

const CardSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
    };

    return (
        <Slider {...settings} className="slider">
            <MeditationCard className={css.cardBackground} title="Медитация исцеления тела" />
            <MeditationCard className={css.cardBackground} title="Медитация исцеления тела" />
            <MeditationCard className={css.cardBackground} title="Медитация изобилия" />
            <MeditationCard className={css.cardBackground} title="Медитация исцеления тела" />
            <MeditationCard className={css.cardBackground} title="Медитация изобилия" />
            <MeditationCard className={css.cardBackground} title="Медитация исцеления тела" />
        </Slider>
    );
};

export default CardSlider;
