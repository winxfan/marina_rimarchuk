import React, { FC } from 'react';

import css from './StatisticProgressBar.module.scss';

export type StatisticProgressBarProps = {
    percent: number | string;
};

export const StatisticProgressBar: FC<StatisticProgressBarProps> = (props) => {
    const { percent } = props;
    let formattedPercent: string | number = '0%';
    let fractionValue = 0;

    switch (typeof percent) {
        case 'string':
            if (percent.includes('/')) {
                const [numerator, denominator] = percent.split('/');
                fractionValue = Math.floor((parseFloat(numerator) / parseFloat(denominator)) * 100);
                formattedPercent = `${numerator}/${denominator}`;
            }
            break;

        case 'number':
            formattedPercent = `${percent}%`;
            fractionValue = percent;
            break;

        default:
            break;
    }

    return (
        <div className={css.completePercent}>
            <div className={css.completeNumber} style={{ width: `${fractionValue}%` }}>
                <span className={css.number}>{formattedPercent}</span>
            </div>
        </div>
    );
};
