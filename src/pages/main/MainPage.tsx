import { MeditationsBlock } from '../../modules/meditationBlock/MeditationsBlock';
import { PodcastsBlock } from '../../modules/podcastsBlock/PodcastsBlock';
import { VideoBlock } from '../../modules/videoBlock/VideoBlock';
import css from './Main.module.scss';
import { AffirmationDay } from './components/AffirmationDay';
import { BookBlock } from './components/BookBlock';
import { WaterTracker } from './components/WaterTracker';

export const MainPage = () => {
    return (
        <div className={css.container}>
            <AffirmationDay />
            <WaterTracker />
            <MeditationsBlock />
            <BookBlock />
            <PodcastsBlock />
            <VideoBlock />
        </div>
    );
};
