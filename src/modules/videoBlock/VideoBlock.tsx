import React, { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { VideoCard } from '@/pages/main/components/parts/VideoCard';
import { AllVideos, AllVideosResponse } from '@/utils/types/videos';

import { CommonHeader } from '../header/components/CommonHeader';
import CardSlider from '../slider/CardSlider';
import css from './VideoBlock.module.scss';

export type VideoBlockProps = any;

export const VideoBlock: FC<VideoBlockProps> = () => {
    const allVideos: AllVideos = useSelector((state: AllVideosResponse) => state.videos);

    return (
        <div className={css.videoBlock}>
            <Link to="/video" className={css.resetStyle}>
                <CommonHeader title="Видео от Марины Римарчук" />
            </Link>
            {allVideos.data ? (
                <CardSlider slidesToShow={2.15} slidesToShowMobile={1.75}>
                    {allVideos.data?.map((item, index) => (
                        <VideoCard key={item.id} {...item} index={index} />
                    ))}
                </CardSlider>
            ) : null}
        </div>
    );
};
