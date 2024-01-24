import React from 'react';

import { AccordionComponent } from '../../../modules/accordion/AccordionComponent';
import { HeaderPage } from '../../../modules/header/components/HeaderPage';
import { ProgressBar } from '../../../modules/progressBar/ProgressBar';
import { useBackButton } from '../../../utils/hooks/useBackButton';
import { IAccordionContent } from '../../../utils/types/statistic';
import css from './StatisticTasks.module.scss';

const levelData: IAccordionContent[] = [
    {
        id: '1',
        title: 'Звездочка',
        content: [
            {
                title: 'Куплено 1/3 методичек',
                progress: {
                    component: <ProgressBar percent={'1/3'} />,
                    id: '6',
                },
            },
            {
                title: '3/20 дней подряд заполняется трекер воды',
                progress: {
                    component: <ProgressBar percent={'3/20'} />,
                    id: '7',
                },
            },
        ],
    },
    {
        id: '2',
        title: 'Звезда',
        content: [
            {
                title: 'Куплено 1/3 методичек',
                progress: {
                    component: <ProgressBar percent={'1/3'} />,
                    id: '8',
                },
            },
            {
                title: '3/20 дней подряд заполняется трекер воды',
                progress: {
                    component: <ProgressBar percent={'3/20'} />,
                    id: '9',
                },
            },
        ],
    },
    {
        id: '3',
        title: 'Легенда',
        content: [
            {
                title: 'Куплено 1/3 методичек',
                progress: {
                    component: <ProgressBar percent={'1/3'} />,
                    id: '10',
                },
            },
            {
                title: '3/20 дней подряд заполняется трекер воды',
                progress: {
                    component: <ProgressBar percent={'3/20'} />,
                    id: '11',
                },
            },
        ],
    },
];

export const StatisticTasks = () => {
    useBackButton('/statistics');

    return (
        <div className={css.statisticTasks}>
            <HeaderPage title="Задания" />
            <AccordionComponent data={levelData} isTasksPage={true} />
        </div>
    );
};
