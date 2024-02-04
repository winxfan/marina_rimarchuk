import { FC } from 'react';
import { Link } from 'react-router-dom';

import cs from 'classnames';

import PlayIcon from '@/assets/images/meditationCard/play.svg';
import { IMedia } from '@/utils/types/media';

import css from './PodcastCard.module.scss';

export type PodcastCardProps = IMedia & {
    className?: any;
    isPage?: boolean;
};

export const PodcastCard: FC<PodcastCardProps> = (props) => {
    const { className, title, image, time, isPage, id } = props;

    return (
        <div className={cs(css.podcastCardWrapper, className)}>
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
                <Link to={`/mediaPodcast/${id}`}>
                    <PlayIcon className={css.playIcon} />
                </Link>
            </div>
        </div>
    );
};
