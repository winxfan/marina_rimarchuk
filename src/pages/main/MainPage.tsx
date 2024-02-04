import { useEffect, useState } from 'react';

import { MeditationsBlock } from '@/modules/meditationBlock/MeditationsBlock';
import { Menu } from '@/modules/menu/Menu';
import { PodcastsBlock } from '@/modules/podcastsBlock/PodcastsBlock';
import { VideoBlock } from '@/modules/videoBlock/VideoBlock';

import css from './Main.module.scss';
import { AffirmationDay } from './components/AffirmationDay';
import { BookBlock } from './components/BookBlock';
import { WaterTracker } from './components/WaterTracker';

const MainPage = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 500);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 500);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className={css.container}>
            <AffirmationDay />
            <WaterTracker />
            <MeditationsBlock isMobile={isMobile} />
            <BookBlock />
            <PodcastsBlock isMobile={isMobile} />
            <VideoBlock isMobile={isMobile} />
            <Menu />
        </div>
    );
};

export default MainPage;
