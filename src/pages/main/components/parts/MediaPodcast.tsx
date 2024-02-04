import { useMatch } from 'react-router-dom';

import { MediaPlayer } from '@/modules/media/MediaPlayer';
import { data } from '@/modules/podcastsBlock/PodcastsBlock';
import { useBackButton } from '@/utils/hooks/useBackButton';

import css from './MediaPodcast.module.scss';

export const MediaPodcast = () => {
    useBackButton('/');
    const matchPodcast = useMatch('/mediaPodcast/:id');

    const id = Number(matchPodcast?.params.id);
    const entryInfo = data.find((item) => +item.id === +id);

    return <MediaPlayer className={css.mediaPodcast} entryInfo={entryInfo} />;
};
