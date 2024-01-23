import React, { FC } from 'react';

import { HeaderPage } from '../../modules/header/components/HeaderPage';
import { data } from '../../modules/videoBlock/VideoBlock';
import { IVideo } from '../../utils/types/video';
import { VideoCard } from '../main/components/parts/VideoCard';
import css from './VideoPage.module.scss';

export type VideoPageProps = {
    isPage?: boolean;
};

export const VideoPage: FC<VideoPageProps> = (props) => {
    const { isPage } = props;

    return (
        <div className={css.podcastPage}>
            <HeaderPage title="Видео от Марины Римарчук" isVideoBlock={true} />
            <div className={css.podcastWrapper}>
                {data?.map((item, index) => (
                    <VideoCard key={item.id} {...item} index={index} isPage={true} />
                ))}
            </div>
        </div>
    );
};
