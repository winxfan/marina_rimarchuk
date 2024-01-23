import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { VideoCard } from '../../pages/main/components/parts/VideoCard';
import { IVideo } from '../../utils/types/video';
import { CommonHeader } from '../header/components/CommonHeader';
import CardSlider from '../slider/CardSlider';
import css from './VideoBlock.module.scss';

export type VideoBlockProps = {
    isMobile?: boolean;
};

export const data: IVideo[] = [
    {
        id: 1,
        title: '4 шага к исполнению мечты',
        image: '',
    },
    {
        id: 2,
        title: '4 шага к исполнению мечты',
        image: '',
    },
    {
        id: 3,
        title: '4 шага к исполнению мечты',
        image: '',
    },
    {
        id: 4,
        title: '4 шага к исполнению мечты',
        image: '',
    },
];

export const VideoBlock: FC<VideoBlockProps> = (props) => {
    const { isMobile } = props;

    return (
        <div className={css.videoBlock}>
            <Link to="/video" className={css.resetStyle}>
                <CommonHeader title="Видео от Марины Римарчук" />
            </Link>
            <CardSlider isMobile={isMobile} isShowTwo={true}>
                {data?.map((item, index) => (
                    <VideoCard key={item.id} {...item} index={index} />
                ))}
            </CardSlider>
        </div>
    );
};
