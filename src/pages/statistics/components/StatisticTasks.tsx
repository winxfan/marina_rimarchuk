import React from 'react';

import { HeaderPage } from '../../../modules/header/components/HeaderPage';
import css from './StatisticTasks.module.scss';

export const StatisticTasks = () => {
    return (
        <div className={css.statisticTasks}>
            <HeaderPage title="Задания" />
        </div>
    );
};
