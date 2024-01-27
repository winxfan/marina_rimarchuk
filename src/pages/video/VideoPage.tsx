import { HeaderPage } from '../../modules/header/components/HeaderPage';
import { data } from '../../modules/videoBlock/VideoBlock';
import { useBackButton } from '../../utils/hooks/useBackButton';
import { VideoCard } from '../main/components/parts/VideoCard';
import css from './VideoPage.module.scss';

export const VideoPage = () => {
    useBackButton('/');

    return (
        <div className={css.podcastPage}>
            5
            <HeaderPage title="Видео от Марины Римарчук" isVideoBlock={true} />
            <div className={css.podcastWrapper}>
                {data?.map((item, index) => (
                    <VideoCard key={item.id} {...item} index={index} isPage={true} />
                ))}
            </div>
        </div>
    );
};
