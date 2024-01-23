import React, { FC } from 'react';

import css from './StatisticProgressBar.module.scss';

export type StatisticProgressBarProps = {
    percent: number;
};

export const StatisticProgressBar: FC<StatisticProgressBarProps> = (props) => {
    const { percent } = props;
    const formattedPercent = `${percent}%`;

    return (
        <div className={css.completePercent}>
            <div className={css.completeNumber} style={{ width: formattedPercent }}>
                <span className={css.number}>{formattedPercent}</span>
            </div>
        </div>
    );
};
