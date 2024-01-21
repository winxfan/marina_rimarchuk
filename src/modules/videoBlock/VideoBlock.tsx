import React from 'react';

import { VideoCard } from '../../pages/main/components/parts/VideoCard';
import { CommonHeader } from '../header/components/CommonHeader';
import CardSlider from '../slider/CardSlider';
import css from './VideoBlock.module.scss';

export const VideoBlock = () => {
    return (
        <div className={css.videoBlock}>
            <CommonHeader title="Видео от Марины Римарчук" />
            <CardSlider>
                <VideoCard className={css.cardOneBackground} title="4 шага к исполнению мечты" />
                <VideoCard className={css.cardTwoBackground} title="4 шага к исполнению мечты" />
                <VideoCard className={css.cardOneBackground} title="Почему нужно пить чистую воду?" />
                <VideoCard className={css.cardTwoBackground} title="4 шага к исполнению мечты" />
                <VideoCard className={css.cardOneBackground} title="Почему нужно пить чистую воду?" />
            </CardSlider>
        </div>
    );
};
