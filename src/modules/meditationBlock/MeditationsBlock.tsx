import React, { FC } from 'react';

import { MeditationCard } from '../../pages/main/components/parts/MeditationCard';
import { CommonHeader } from '../header/components/CommonHeader';
import CardSlider from '../slider/CardSlider';
import css from './MeditationsBlock.module.scss';

export type MeditationsBlockProps = {
    isMobile?: boolean;
};

export const MeditationsBlock: FC<MeditationsBlockProps> = (props) => {
    const { isMobile } = props;

    return (
        <div className={css.meditationsBlock}>
            <CommonHeader title="Медитации" />
            <CardSlider isMobile={isMobile} isShowTwo={true}>
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
