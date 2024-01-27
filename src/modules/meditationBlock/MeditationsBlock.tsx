import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { MeditationCard } from '../../pages/main/components/parts/MeditationCard';
import { IMedia } from '../../utils/types/media';
import { CommonHeader } from '../header/components/CommonHeader';
import CardSlider from '../slider/CardSlider';
import css from './MeditationsBlock.module.scss';

export type MeditationsBlockProps = {
    isMobile?: boolean;
};

export const data: IMedia[] = [
    {
        id: '12',
        title: 'Медитация исцеления тела',
        time: '12:56',
        file: '',
        image: '',
    },
    {
        id: '124',
        title: 'Медитация исцеления тела',
        time: '12:56',
        file: '',
        image: '',
    },
    {
        id: '126',
        title: 'Медитация изобилия',
        time: '12:56',
        file: '',
        image: '',
    },
];

export const MeditationsBlock: FC<MeditationsBlockProps> = (props) => {
    const { isMobile } = props;

    return (
        <div className={css.meditationsBlock}>
            <Link to="/meditation" className={css.resetStyle}>
                <CommonHeader title="Медитации" />
            </Link>
            <CardSlider isMobile={isMobile} isShowTwo={true}>
                {data?.map((item, index) => (
                    <MeditationCard key={item.id} {...item} index={index} />
                ))}
            </CardSlider>
        </div>
    );
};
