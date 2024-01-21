import React, { FC } from 'react';

import { VideoCard } from '../../pages/main/components/parts/VideoCard';
import { CommonHeader } from '../header/components/CommonHeader';
import CardSlider from '../slider/CardSlider';
import css from './VideoBlock.module.scss';

export type VideoBlockProps = {
    isMobile?: boolean;
};

export const VideoBlock: FC<VideoBlockProps> = (props) => {
    const { isMobile } = props;

    return (
        <div className={css.videoBlock}>
            <CommonHeader title="Видео от Марины Римарчук" />
            <CardSlider isMobile={isMobile} isShowTwo={true}>
                <VideoCard className={css.cardOneBackground} title="4 шага к исполнению мечты" />
                <VideoCard className={css.cardTwoBackground} title="4 шага к исполнению мечты" />
                <VideoCard className={css.cardOneBackground} title="Почему нужно пить чистую воду?" />
                <VideoCard className={css.cardTwoBackground} title="4 шага к исполнению мечты" />
                <VideoCard className={css.cardOneBackground} title="Почему нужно пить чистую воду?" />
            </CardSlider>
        </div>
    );
};
