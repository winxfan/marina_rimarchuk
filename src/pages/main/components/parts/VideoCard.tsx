import { FC } from 'react';

import cs from 'classnames';

import { ReactComponent as VideoPlay } from '../../../../assets/images/videoCard/playVideo.svg';
import scss from './PodcastCard.module.scss';
import css from './VideoCard.module.scss';

export type MeditationCardProps = {
    className?: any;
    title?: string;
    isPage?: boolean;
};

export const VideoCard: FC<MeditationCardProps> = (props) => {
    const { className, title, isPage } = props;

    return (
        <div>
            <div className={cs(css.videoCard, isPage ? css.videoPageCard : '')}>
                <div className={className}></div>
                <div className={css.cardTitle}>{title}</div>
                <div className={css.videoPlay}>
                    <div className={css.videoIcon}>
                        <VideoPlay />
                    </div>
                    <div className={css.startVideo}>Смотреть</div>
                </div>
            </div>
        </div>
    );
};
