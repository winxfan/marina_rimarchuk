import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { PodcastCard } from '../../pages/main/components/parts/PodcastCard';
import { CommonHeader } from '../header/components/CommonHeader';
import CardSlider from '../slider/CardSlider';
import css from './PodcastsBlock.module.scss';

export type PodcastsBlockProps = {
    isMobile?: boolean;
};

export const PodcastsBlock: FC<PodcastsBlockProps> = (props) => {
    const { isMobile } = props;

    return (
        <div className={css.podcastsBlock}>
            <Link to="/podcasts" className={css.resetStyle}>
                <CommonHeader title="Подкасты" />
            </Link>
            <CardSlider isMobile={isMobile} isShowTwo={true}>
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
