import React, { FC } from 'react';

import { HeaderPage } from '../../modules/header/components/HeaderPage';
import { MeditationCard } from '../main/components/parts/MeditationCard';
import css from './MeditationPage.module.scss';

export type MeditationPageProps = {
    isPage?: boolean;
};

export const MeditationPage: FC<MeditationPageProps> = (props) => {
    const { isPage } = props;

    return (
        <div className={css.meditationPage}>
            <HeaderPage title="Медитации" />
            <div className={css.meditationWrapper}>
                <MeditationCard isPage={isPage} className={css.cardOneBackground} title="Медитация исцеления тела" />
                <MeditationCard isPage={isPage} className={css.cardTwoBackground} title="Медитация исцеления тела" />
                <MeditationCard isPage={isPage} className={css.cardOneBackground} title="Медитация изобилия" />
                <MeditationCard isPage={isPage} className={css.cardTwoBackground} title="Медитация исцеления тела" />
            </div>
        </div>
    );
};
