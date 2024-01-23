import React, { FC } from 'react';

import { HeaderPage } from '../../modules/header/components/HeaderPage';
import { IMeditation } from '../../utils/types/meditation';
import { MeditationCard } from '../main/components/parts/MeditationCard';
import css from './MeditationPage.module.scss';

export type MeditationPageProps = {
    isPage?: boolean;
};

const data: IMeditation[] = [
    {
        id: '12',
        title: 'Медитация исцеления тела',
        time: '12:56',
    },
    {
        id: '124',
        title: 'Медитация исцеления тела',
        time: '12:56',
    },
    {
        id: '126',
        title: 'Медитация исцеления тела',
        time: '12:56',
    },
];

export const MeditationPage: FC<MeditationPageProps> = () => {
    return (
        <div className={css.meditationPage}>
            <HeaderPage title="Медитации" />
            <div className={css.meditationWrapper}>
                {data?.map((item, index) => (
                    <MeditationCard key={item.id} {...item} isPage={true} index={index} />
                ))}
            </div>
        </div>
    );
};
