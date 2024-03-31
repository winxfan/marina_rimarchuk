import React, { FC } from 'react';
import ReactPlayer from 'react-player';

import css from '@/modules/media/VideoPlayer.module.scss';

export type VideoPlayerProps = {
    videoUrl: string;
    previewUrl?: string;
    width: string;
    height: string;
};

const VideoPlayer: FC<VideoPlayerProps> = (props) => {
    const { videoUrl, previewUrl, width, height } = props;

    return (
        <div className={css.videoPlayerContainer} style={{ maxWidth: width, minHeight: height }}>
            <video controls width="100%" height="100%">
                <source src={videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default VideoPlayer;
