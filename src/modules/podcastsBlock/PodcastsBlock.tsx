import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { PodcastCard } from '@/pages/main/components/parts/PodcastCard';
import { IMedia } from '@/utils/types/media';

import { CommonHeader } from '../header/components/CommonHeader';
import CardSlider from '../slider/CardSlider';
import css from './PodcastsBlock.module.scss';

export type PodcastsBlockProps = {
    isMobile?: boolean;
};

export const data: IMedia[] = [
    {
        id: 1,
        title: 'Практика намерения, которая перевернет жизнь!',
        time: '12:56',
        file: '',
        image: '',
    },
    {
        id: 2,
        title: 'Практика намерения, которая перевернет жизнь!',
        time: '12:56',
        file: '',
        image: '',
    },
    {
        id: 3,
        title: 'Практика намерения!',
        file: '',
        image: '',
        time: '12:56',
    },
    {
        id: 4,
        title: 'Практика намерения, которая перевернет жизнь!',
        file: '',
        image: '',
        time: '12:56',
    },
];

export const PodcastsBlock: FC<PodcastsBlockProps> = (props) => {
    const { isMobile } = props;

    return (
        <div className={css.podcastsBlock}>
            <Link to="/podcasts" className={css.resetStyle}>
                <CommonHeader title="Подкасты" />
            </Link>
            <CardSlider isMobile={isMobile} isShowTwo={true}>
                {data?.map((item) => (
                    <PodcastCard key={item.id} {...item} />
                ))}
            </CardSlider>
        </div>
    );
};
