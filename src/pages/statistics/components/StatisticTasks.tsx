import React from 'react';

import { AccordionComponent } from '../../../modules/accordion/AccordionComponent';
import { HeaderPage } from '../../../modules/header/components/HeaderPage';
import css from './StatisticTasks.module.scss';

export const StatisticTasks = () => {
    const levelData = [
        {
            title: 'Звездочка',
            contentOne: 'Куплено 1/3 методичек',
            contentTwo: '3/20 дней подряд заполняется трекер воды',
        },
        {
            title: 'Звезда',
            contentOne: 'Куплено 1/3 методичек',
            contentTwo: '3/20 дней подряд заполняется трекер воды',
        },
        {
            title: 'Легенда',
            contentOne: 'Куплено 1/3 методичек',
            contentTwo: '3/20 дней подряд заполняется трекер воды',
        },
    ];

    return (
        <div className={css.statisticTasks}>
            <HeaderPage title="Задания" />
            <AccordionComponent data={levelData} isTasksPage={true} />
        </div>
    );
};
