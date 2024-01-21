import React from 'react';

import { MeditationCard } from '../../pages/main/components/parts/MeditationCard';
import { CommonHeader } from '../header/components/CommonHeader';
import CardSlider from '../slider/CardSlider';
import css from './MeditationsBlock.module.scss';

export const MeditationsBlock = () => {
    return (
        <div className={css.meditationsBlock}>
            <CommonHeader title="Медитации" />
            <CardSlider>
                <MeditationCard className={css.cardOneBackground} title="Медитация исцеления тела" />
                <MeditationCard className={css.cardTwoBackground} title="Медитация исцеления тела" />
                <MeditationCard className={css.cardOneBackground} title="Медитация изобилия" />
                <MeditationCard className={css.cardTwoBackground} title="Медитация исцеления тела" />
                <MeditationCard className={css.cardOneBackground} title="Медитация изобилия" />
                <MeditationCard className={css.cardTwoBackground} title="Медитация исцеления тела" />
            </CardSlider>
        </div>
    );
};
