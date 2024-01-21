import React from 'react';

import { PodcastCard } from '../../pages/main/components/parts/PodcastCard';
import { CommonHeader } from '../header/components/CommonHeader';
import CardSlider from '../slider/CardSlider';
import css from './PodcastsBlock.module.scss';

export const PodcastsBlock = () => {
    return (
        <div className={css.podcastsBlock}>
            <CommonHeader title="Подкасты" />
            <CardSlider>
                <PodcastCard className={css.podcastOneBack} title="Практика намерения, которая перевернет жизнь!" />
                <PodcastCard className={css.podcastTwoBack} title="Я НЕ Г*ВНО или как ощутить свою ценность" />
                <PodcastCard className={css.podcastOneBack} title="Практика намерения, которая перевернет жизнь!" />
                <PodcastCard className={css.podcastTwoBack} title="Я НЕ Г*ВНО или как ощутить свою ценность" />
                <PodcastCard className={css.podcastOneBack} title="Практика намерения, которая перевернет жизнь!" />
                <PodcastCard className={css.podcastTwoBack} title="Я НЕ Г*ВНО или как ощутить свою ценность" />
            </CardSlider>
        </div>
    );
};
