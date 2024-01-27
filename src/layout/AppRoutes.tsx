import { Route, Routes } from 'react-router-dom';

import { QueryParamProvider } from 'use-query-params';
import { ReactRouter6Adapter } from 'use-query-params/adapters/react-router-6';

import { MainPage, NotFoundPage, QuestionPage } from '../pages';
import { DeliveryPage } from '../pages/delivery/DeliveryPage';
import { BookInfo } from '../pages/main/components/parts/BookInfo';
import { MediaMeditation } from '../pages/main/components/parts/MediaMeditation';
import { MediaPodcast } from '../pages/main/components/parts/MediaPodcast';
import { ManualsPage } from '../pages/manuals/ManualsPage';
import { ManualInfo } from '../pages/manuals/components/parts/ManualInfo';
import { MeditationPage } from '../pages/meditation/MeditationPage';
import { PodcastPage } from '../pages/podcast';
import { StatisticsPage } from '../pages/statistics/StatisticsPage';
import { StatisticTasks } from '../pages/statistics/components/StatisticTasks';
import { VideoPage } from '../pages/video/VideoPage';
import { CoursesPage } from '../pages/сourses/CoursesPage';
import { routes } from './routes';

export const AppRoutes = () => {
    return (
        <QueryParamProvider adapter={ReactRouter6Adapter}>
            <Routes>
                <Route index path={routes.index.path} element={<MainPage />} />
                <Route index path={routes.meditation.path} element={<MeditationPage />} />
                <Route index path={routes.podcasts.path} element={<PodcastPage />} />
                <Route index path={routes.video.path} element={<VideoPage />} />
                <Route index path={routes.questions.path} element={<QuestionPage />} />
                <Route index path={routes.statistics.path} element={<StatisticsPage />} />
                <Route index path={routes.tasks.path} element={<StatisticTasks />} />
                <Route index path={routes.manuals.path} element={<ManualsPage />} />
                <Route index path={routes.infoBook.path} element={<BookInfo />} />
                <Route index path={routes.infoManual.path} element={<ManualInfo />} />
                <Route index path={routes.mediaMeditation.path} element={<MediaMeditation />} />
                <Route index path={routes.mediaPodcast.path} element={<MediaPodcast />} />
                <Route index path={routes.courses.path} element={<CoursesPage />} />
                <Route index path={routes.delivery.path} element={<DeliveryPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </QueryParamProvider>
    );
};
