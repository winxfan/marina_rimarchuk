import { FC } from 'react';

import cs from 'classnames';

import { ReactComponent as PlayIcon } from '../../../../assets/images/meditationCard/play.svg';
import { type IMeditation } from '../../../../utils/types/meditation';
import css from './MeditationCard.module.scss';

export type MeditationCardProps = IMeditation & {
    index?: number;
    className?: any;
    isPage?: boolean;
};

export const MeditationCard: FC<MeditationCardProps> = (props) => {
    const { className, title, isPage, time, index } = props;

    return (
        <div className={className}>
            <div className={cs(css.card, isPage ? css.meditationPageCard : '')} data-index={index}>
                <div className={css.cardTitle}>{title}</div>
                <div className={css.cardTime}>{time}</div>
                <PlayIcon className={css.playIcon} />
            </div>
        </div>
    );
};
