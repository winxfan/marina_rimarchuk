import { FC } from 'react';

import { ReactComponent as VideoPlay } from '../../../../assets/images/videoCard/playVideo.svg';
import css from './VideoCard.module.scss';

export type MeditationCardProps = {
    className?: any;
    title?: string;
};

export const VideoCard: FC<MeditationCardProps> = (props) => {
    const { className, title } = props;

    return (
        <div>
            <div className={css.videoCard}>
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
