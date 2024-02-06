import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { MeditationCard } from '@/pages/main/components/parts/MeditationCard';
import { IMedia } from '@/utils/types/media';

import { CommonHeader } from '../header/components/CommonHeader';
import CardSlider from '../slider/CardSlider';
import css from './MeditationsBlock.module.scss';

export type MeditationsBlockProps = any;

export const data: IMedia[] = [
    {
        id: '1',
        title: 'Медитация исцеления тела',
        time: '12:56',
        file: '',
        image: 'background: linear-gradient(90deg, #160F35 16.67%, #1D1C48 100%), #211A41',
    },
    {
        id: '2',
        title: 'Медитация исцеления тела',
        time: '12:56',
        file: '',
        image: 'background: linear-gradient(90deg, #160F35 16.67%, #1D1C48 100%), #211A41',
    },
    {
        id: '3',
        title: 'Медитация изобилия',
        time: '12:56',
        file: '',
        image: 'background: linear-gradient(90deg, #160F35 16.67%, #1D1C48 100%), #211A41',
    },
    {
        id: '4',
        title: 'Медитация исцеления тела',
        time: '12:56',
        file: '',
        image: 'background: linear-gradient(90deg, #160F35 16.67%, #1D1C48 100%), #211A41',
    },
    {
        id: '5',
        title: 'Медитация исцеления тела',
        time: '12:56',
        file: '',
        image: 'background: linear-gradient(90deg, #160F35 16.67%, #1D1C48 100%), #211A41',
    },
    {
        id: '6',
        title: 'Медитация изобилия',
        time: '12:56',
        file: '',
        image: 'background: linear-gradient(90deg, #160F35 16.67%, #1D1C48 100%), #211A41',
    },
];

export const MeditationsBlock: FC<MeditationsBlockProps> = () => {
    return (
        <div className={css.meditationsBlock}>
            <Link to="/meditation" className={css.resetStyle}>
                <CommonHeader title="Медитации" />
            </Link>
            <CardSlider slidesToShow={2.5} slidesToShowMobile={1.75}>
                {data?.map((item, index) => (
                    <MeditationCard key={item.id} {...item} index={index} />
                ))}
            </CardSlider>
        </div>
    );
};
