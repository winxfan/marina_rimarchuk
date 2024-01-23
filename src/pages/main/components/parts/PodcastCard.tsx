import { FC } from 'react';

import cs from 'classnames';

import { ReactComponent as PlayIcon } from '../../../../assets/images/meditationCard/play.svg';
import { IPodcast } from '../../../../utils/types/podcast';
import css from './PodcastCard.module.scss';

export type PodcastCardProps = IPodcast & {
    className?: any;
    isPage?: boolean;
    image: string;
};

export const PodcastCard: FC<PodcastCardProps> = (props) => {
    const { className, title, image, time, isPage } = props;

    return (
        <div className={className}>
            <div
                className={cs(css.podcastCard, isPage ? css.podcastPageCard : '')}
                style={{
                    backgroundImage: image,
                    backgroundPosition: 'center center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <div className={cs(css.cardTitle)}>{title}</div>
                <div className={css.cardTime}>{time}</div>
                <PlayIcon className={css.playIcon} />
            </div>
        </div>
    );
};
