import { FC } from 'react';

import cs from 'classnames';

import { ReactComponent as PlayIcon } from '../../../../assets/images/meditationCard/play.svg';
import scss from './PodcastCard.module.scss';

export type PodcastCardProps = {
    className?: any;
    title?: string;
    isPage?: boolean;
};

export const PodcastCard: FC<PodcastCardProps> = (props) => {
    const { className, title, isPage } = props;

    return (
        <div className={className}>
            <div className={cs(scss.podcastCard, isPage ? scss.podcastPageCard : '')}>
                <div className={cs(scss.cardTitle, isPage ? scss.podcastTitleCard : '')}>{title}</div>
                <div className={scss.cardTime}>12:56</div>
                <div className={scss.playIcon}>
                    <PlayIcon />
                </div>
            </div>
        </div>
    );
};
