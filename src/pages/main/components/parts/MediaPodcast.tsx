import React, { FC } from 'react';
import { useMatch } from 'react-router-dom';

import { MediaPlayer } from '../../../../modules/media/MediaPlayer';
import { data } from '../../../../modules/podcastsBlock/PodcastsBlock';
import { useBackButton } from '../../../../utils/hooks/useBackButton';

export type MediaPodcastProps = any;

export const MediaPodcast: FC<MediaPodcastProps> = () => {
    useBackButton('/');
    const matchPodcast = useMatch('/mediaPodcast/:id');

    const id = Number(matchPodcast?.params.id);
    const entryInfo = data.find((item) => +item.id === +id);

    return <MediaPlayer entryInfo={entryInfo} />;
};
