import { FC } from 'react';

import cs from 'classnames';

import { ReactComponent as PlayIcon } from '../../../../assets/images/meditationCard/play.svg';
import css from './MeditationCard.module.scss';
import scss from './PodcastCard.module.scss';

export type MeditationCardProps = {
    className?: any;
    title?: string;
    isPage?: boolean;
};

export const PodcastCard: FC<MeditationCardProps> = (props) => {
    const { className, title, isPage } = props;

    return (
        <div className={className}>
            <div className={cs(scss.podcastCard, isPage ? scss.podcastPageCard : '')}>
                <div className={cs(css.cardTitle, isPage ? scss.podcastTitleCard : '')}>{title}</div>
                <div className={css.cardTime}>12:56</div>
                <div className={css.playIcon}>
                    <PlayIcon />
                </div>
            </div>
        </div>
    );
};
