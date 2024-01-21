import React, { FC, ReactNode } from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

export type CardSliderProps = {
    children: ReactNode;
    isVideoBlock?: boolean;
};

const CardSlider: FC<CardSliderProps> = (props) => {
    const { children, isVideoBlock } = props;

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: isVideoBlock ? 1 : 3,
        slidesToScroll: 1,
        arrows: false,
    };

    return <Slider {...settings}>{children}</Slider>;
};

export default CardSlider;
