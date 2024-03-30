import React, { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { VideoCard } from '@/pages/main/components/parts/VideoCard';
import { IMedia } from '@/utils/types/media';
import { AllVideos, AllVideosResponse, Videos } from '@/utils/types/videos';

import { CommonHeader } from '../header/components/CommonHeader';
import CardSlider from '../slider/CardSlider';
import css from './VideoBlock.module.scss';

export type VideoBlockProps = any;

export const data: Videos[] = [
    {
        id: 8,
        name: 'О важности воды, которую недооценивают',
        pic_url:
            'https://images.thevoicemag.ru/upload/img_cache/c31/c31ce9630d2a396696d3849e799f9fa4_ce_2370x1244x0x70_cropped_1200x628.jpg',
        vid_url:
            'https://content-water.plutus-fin.ru/videos/%D0%9E%20%D0%B2%D0%B0%D0%B6%D0%BD%D0%BE%D1%81%D1%82%D0%B8%20%D0%B2%D0%BE%D0%B4%D0%B8%D1%87%D0%BA%D0%B8%20%F0%9F%92%A6%F0%9F%92%A6%F0%9F%92%A6.mp4',
    },
    {
        id: 9,
        name: 'Про очищение организма, кому это надо',
        pic_url: 'https://www.jv.ru/images/logo.png',
        vid_url:
            'https://content-water.plutus-fin.ru/videos/%D0%9F%D1%80%D0%BE%20%D0%BE%D1%87%D0%B8%D1%89%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%BE%D1%80%D0%B3%D0%B0%D0%BD%D0%B8%D0%B7%D0%BC%D0%B0%F0%9F%8C%BF%F0%9F%8C%BF%F0%9F%8C%BF.mp4',
    },
    {
        id: 10,
        name: 'Про углеводы. То, что вы должны знать прямо сейчас',
        pic_url: 'https://www.jv.ru/images/logo.png',
        vid_url:
            'https://content-water.plutus-fin.ru/videos/%D0%9F%D1%80%D0%BE%20%D1%83%D0%B3%D0%BB%D0%B5%D0%B2%D0%BE%D0%B4%D1%8B%20%F0%9F%8D%8E%F0%9F%91%80.mp4',
    },
    {
        id: 11,
        name: 'Жиры и молодость. Прямая связь',
        pic_url:
            'https://images.thevoicemag.ru/upload/img_cache/c31/c31ce9630d2a396696d3849e799f9fa4_ce_2370x1244x0x70_cropped_1200x628.jpg',
        vid_url:
            'https://content-water.plutus-fin.ru/videos/%D0%9F%D0%A0%D0%9E%20%D0%92%D0%90%D0%96%D0%9D%D0%9E%D0%A1%D0%A2%D0%AC%20%D0%96%D0%98%D0%A0%D0%9E%D0%92%20%D0%92%20%D0%A0%D0%90%D0%A6%D0%98%D0%9E%D0%9D%D0%95.mp4',
    },
];

export const VideoBlock: FC<VideoBlockProps> = () => {
    const allVideos: AllVideos = useSelector((state: AllVideosResponse) => state.videos);
    //console.log(allVideos.data, 'allVideos.data');

    return (
        <div className={css.videoBlock}>
            <Link to="/video" className={css.resetStyle}>
                <CommonHeader title="Видео от Марины Римарчук" />
            </Link>

            <CardSlider slidesToShow={2.15} slidesToShowMobile={1.75}>
                {data ? data?.map((item, index) => <VideoCard key={item.id} {...item} index={index} />) : null}
            </CardSlider>
        </div>
    );
};
