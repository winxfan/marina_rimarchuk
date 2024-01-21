import { FC } from 'react';

import { ReactComponent as PlayIcon } from '../../../../assets/images/meditationCard/play.svg';
import css from './MeditationCard.module.scss';
import scss from './PodcastCard.module.scss';

export type MeditationCardProps = {
    className?: any;
    title?: string;
};

export const PodcastCard: FC<MeditationCardProps> = (props) => {
    const { className, title } = props;

    return (
        <div className={className}>
            <div className={scss.podcastCard}>
                <div className={css.cardTitle}>{title}</div>
                <div className={css.cardTime}>12:56</div>
                <div className={css.playIcon}>
                    <PlayIcon />
                </div>
            </div>
        </div>
    );
};
