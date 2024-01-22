import { FC } from 'react';

import cs from 'classnames';

import { ReactComponent as PlayIcon } from '../../../../assets/images/meditationCard/play.svg';
import { IPodcast } from '../../../../utils/types/podcast';
import css from './PodcastCard.module.scss';

export type PodcastCardProps = IPodcast & {
    className?: any;
    isPage?: boolean;
};

export const PodcastCard: FC<PodcastCardProps> = (props) => {
    const { className, title, image, time, isPage } = props;

    return (
        <div
            className={cs(css.podcastCard, isPage ? css.podcastPageCard : '', className)}
            style={{ backgroundImage: image }}
        >
            <div className={cs(css.cardTitle, isPage ? css.podcastTitleCard : '')}>{title}</div>
            <div className={css.cardTime}>{time}</div>
            <PlayIcon className={css.playIcon} />
        </div>
    );
};
