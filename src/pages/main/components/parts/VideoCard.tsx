import { FC } from 'react';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';

import cs from 'classnames';

import VideoPlay from '@/assets/images/videoCard/playVideo.svg';
import VideoPlayer from '@/modules/media/VideoPlayer';
import { Videos } from '@/utils/types/videos';

import css from './VideoCard.module.scss';

export type VideoCardProps = Videos & {
    className?: any;
    isPage?: boolean;
    index?: number;
};

export const VideoCard: FC<VideoCardProps> = (props) => {
    const { className, name, pic_url, vid_url, isPage, index } = props;

    return (
        <div className={cs(css.videoCardWrapper, className)}>
            <div className={cs(css.videoCard, isPage ? css.videoPageCard : '')}>
                <VideoPlayer videoUrl={vid_url} previewUrl={pic_url} width={'235px'} height={'100px'} />
            </div>
            <div className={css.cardTitle}>{name}</div>
            <Link to="/video" className={css.videoPlay}>
                <div className={css.videoIcon}>
                    <VideoPlay />
                </div>
                <div className={css.startVideo}>Смотреть</div>
            </Link>
        </div>
    );
};
