import { Route, Routes } from 'react-router-dom';

import { QueryParamProvider } from 'use-query-params';
import { ReactRouter6Adapter } from 'use-query-params/adapters/react-router-6';

import { MainPage, NotFoundPage } from '../pages';
import { MeditationPage } from '../pages/meditation/MeditationPage';
import { PodcastPage } from '../pages/podcast/PodcastPage';
import { QuestionPage } from '../pages/questions/QuestionPage';
import { StatisticsPage } from '../pages/statistics/StatisticsPage';
import { StatisticTasks } from '../pages/statistics/components/StatisticTasks';
import { VideoPage } from '../pages/video/VideoPage';
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
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </QueryParamProvider>
    );
};
