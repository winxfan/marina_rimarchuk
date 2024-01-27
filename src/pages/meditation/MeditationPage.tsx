import React, { FC } from 'react';

import { HeaderPage } from '../../modules/header/components/HeaderPage';
import { data } from '../../modules/meditationBlock/MeditationsBlock';
import { useBackButton } from '../../utils/hooks/useBackButton';
import { MeditationCard } from '../main/components/parts/MeditationCard';
import css from './MeditationPage.module.scss';

export type MeditationPageProps = {
    isPage?: boolean;
};

export const MeditationPage: FC<MeditationPageProps> = () => {
    useBackButton('/');

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
