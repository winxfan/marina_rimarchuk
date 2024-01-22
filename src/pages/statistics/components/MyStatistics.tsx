import React from 'react';

import css from './MyStatistics.module.scss';
import { StatisticLevel } from './parts/StatisticLevel';

export const MyStatistics = () => {
    return (
        <div className={css.myStatistics}>
            <div className={css.myStatisticsTitle}>Моя статистика</div>
            <StatisticLevel />
        </div>
    );
};
