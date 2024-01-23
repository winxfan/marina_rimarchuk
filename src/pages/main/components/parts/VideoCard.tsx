import { FC } from 'react';
import { Link } from 'react-router-dom';

import cs from 'classnames';

import { ReactComponent as VideoPlay } from '../../../../assets/images/videoCard/playVideo.svg';
import css from './VideoCard.module.scss';

export type VideoCardProps = {
    className?: any;
    title?: string;
    isPage?: boolean;
    index?: number;
};

export const VideoCard: FC<VideoCardProps> = (props) => {
    const { className, title, isPage, index } = props;

    return (
        <div className={className}>
            <div className={cs(css.videoCard, isPage ? css.videoPageCard : '')} data-index={index}></div>
            <div className={css.cardTitle}>{title}</div>
            <Link to="/" className={css.videoPlay}>
                <div className={css.videoIcon}>
                    <VideoPlay />
                </div>
                <div className={css.startVideo}>Смотреть</div>
            </Link>
        </div>
    );
};
