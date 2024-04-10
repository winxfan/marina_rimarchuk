import {shallowEqual, useSelector} from 'react-redux';

import { HeaderPage } from '@/modules/header/components/HeaderPage';
import { useBackButton } from '@/utils/hooks/useBackButton';
import { AllVideos, AllVideosResponse } from '@/utils/types/videos';

import { VideoCard } from '../main/components/parts/VideoCard';
import css from './VideoPage.module.scss';
import {useQueryParam} from "use-query-params";
import {useParams} from "react-router-dom";
import React from "react";
import VideoPlayer from "@/modules/media/VideoPlayer";

const VideoPage = () => {
    useBackButton('/videos');

  const { id } = useParams();

  const allVideos: AllVideos = useSelector((state: AllVideosResponse) => state.videos, shallowEqual);

    const currentVideo = allVideos.data.find((item) => item.id === id);

    return (
        <div className={css.videoPage}>
          {currentVideo
            ? (
              <>
                <HeaderPage title="Видео от Марины Римарчук" lessSize={true}  />
                <div className={css.videoWrapper}>
                  <VideoPlayer videoUrl={currentVideo.vid_url} previewUrl={currentVideo.pic_url} width="100%" height="auto" />
                </div>
              </>
            )
            : (
              <>
                <HeaderPage title="Not found" lessSize={true} />
                <p>
                  Видео не найдено
                </p>
              </>
            )}
        </div>
    );
};

export default VideoPage;
