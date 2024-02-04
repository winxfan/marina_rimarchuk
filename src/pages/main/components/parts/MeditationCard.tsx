import { FC } from 'react';
import { Link } from 'react-router-dom';

import cs from 'classnames';

import PlayIcon from '@/assets/images/meditationCard/play.svg';
import { IMedia } from '@/utils/types/media';

import css from './MeditationCard.module.scss';

export type MeditationCardProps = IMedia & {
    index?: number;
    className?: any;
    isPage?: boolean;
};

export const MeditationCard: FC<MeditationCardProps> = (props) => {
    const { className, title, isPage, time, index, id } = props;

    return (
        <div className={cs(css.meditationCardWrapper, className)}>
            <div className={cs(css.card, isPage ? css.meditationPageCard : '')} data-index={index}>
                <div className={css.cardTitle}>{title}</div>
                <div className={css.cardTime}>{time}</div>
                <Link to={`/mediaMeditation/${id}`}>
                    <PlayIcon className={css.playIcon} />
                </Link>
            </div>
        </div>
    );
};
