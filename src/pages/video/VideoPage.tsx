import { HeaderPage } from '@/modules/header/components/HeaderPage';
import { data } from '@/modules/videoBlock/VideoBlock';
import { useBackButton } from '@/utils/hooks/useBackButton';

import { VideoCard } from '../main/components/parts/VideoCard';
import css from './VideoPage.module.scss';

const VideoPage = () => {
    useBackButton('/');

    return (
        <div className={css.podcastPage}>
            <HeaderPage title="Видео от Марины Римарчук" lessSize={true} />
            <div className={css.podcastWrapper}>
                {data?.map((item, index) => (
                    <VideoCard key={item.id} {...item} index={index} isPage={true} />
                ))}
            </div>
        </div>
    );
};

export default VideoPage;
