import React, { FC } from 'react';

import { HeaderPage } from '../../modules/header/components/HeaderPage';
import { MeditationCard } from '../main/components/parts/MeditationCard';
import { PodcastCard } from '../main/components/parts/PodcastCard';
import { VideoCard } from '../main/components/parts/VideoCard';
import css from './VideoPage.module.scss';

export type VideoPageProps = {
    isPage?: boolean;
};

export const VideoPage: FC<VideoPageProps> = (props) => {
    const { isPage } = props;

    return (
        <div className={css.podcastPage}>
            <HeaderPage title="Видео от Марины Римарчук" />
            <div className={css.podcastWrapper}>
                <VideoCard isPage={isPage} className={css.cardOneBackground} title="4 шага к исполнению мечты" />
                <VideoCard isPage={isPage} className={css.cardTwoBackground} title="4 шага к исполнению мечты" />
                <VideoCard isPage={isPage} className={css.cardOneBackground} title="Почему нужно пить чистую воду?" />
                <VideoCard isPage={isPage} className={css.cardTwoBackground} title="4 шага к исполнению мечты" />
            </div>
        </div>
    );
};
