import { FC } from 'react';
import { Link } from 'react-router-dom';

import cs from 'classnames';

import { ReactComponent as VideoPlay } from '../../../../assets/images/videoCard/playVideo.svg';
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
                <button type="button">
                    <Link to="/" className={css.videoPlay}>
                        <div className={css.videoIcon}>
                            <VideoPlay />
                        </div>
                        <div className={css.startVideo}>Смотреть</div>
                    </Link>
                </button>
            </div>
        </div>
    );
};
