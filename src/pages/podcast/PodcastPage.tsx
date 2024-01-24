import React from 'react';

import { HeaderPage } from '../../modules/header/components/HeaderPage';
import { useBackButton } from '../../utils/hooks/useBackButton';
import { IPodcast } from '../../utils/types/podcast';
import { PodcastCard } from '../main/components/parts/PodcastCard';
import css from './PodcastPage.module.scss';

const data: IPodcast[] = [
    {
        id: 1,
        title: 'Практика намерения, которая перевернет жизнь!',
        time: '12:56',
        image: 'string',
    },
    {
        id: 2,
        title: '123!',
        time: '12:56',
        image: 'string',
    },
    {
        id: 3,
        title: 'Практика намерения, которая перевернет жизнь!',
        image: 'string',
        time: '12:56',
    },
    {
        id: 4,
        title: '123!',
        image: 'string',
        time: '12:56',
    },
];

export const PodcastPage = () => {
    useBackButton('/');

    return (
        <div className={css.podcastPage}>
            <HeaderPage title="Подкасты" />
            <div className={css.podcastWrapper}>
                {data?.map((item) => (
                    <PodcastCard key={item.id} {...item} isPage={true} />
                ))}
            </div>
        </div>
    );
};
