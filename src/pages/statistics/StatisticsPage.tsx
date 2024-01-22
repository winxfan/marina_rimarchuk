import React from 'react';

import { ReactComponent as AvatarIcon } from '../../assets/images/statistics/avatar.svg';
import css from './StatisticsPage.module.scss';
import { MyStatistics } from './components/MyStatistics';

export const StatisticsPage = () => {
    return (
        <div className={css.statisticsWrapper}>
            <div className={css.statisticsPage}>
                <div className={css.userAvatar}>
                    <AvatarIcon />
                </div>
                <div className={css.username}>Ангелина</div>
            </div>
            <MyStatistics />
        </div>
    );
};
