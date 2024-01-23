import React, { FC } from 'react';

import cs from 'classnames';

import { IStatisticInfoCard } from '../../../../utils/types/statistic';
import css from './StatisticInfoCard.module.scss';

export type StatisticInfoCardProps = {
    className?: any;
};

const data: IStatisticInfoCard[] = [
    { id: '1', icon: '', title: '1000 мл', description: 'за неделю выпито воды' },
    { id: '2', icon: '', title: '22 000 мл', description: 'за месяц выпито воды' },
    { id: '3', icon: '', title: '10', description: 'Видео вы уже посмотрели' },
    { id: '4', icon: '', title: '101', description: 'Подкастов вы уже послушали' },
];

export const StatisticInfoCard: FC<StatisticInfoCardProps> = (props) => {
    const { className } = props;

    return (
        <div className={cs(css.statisticInfoCard, className)}>
            {data.map((item, index) => (
                <div key={item.id} className={cs(css.infoCardItem)}>
                    <div
                        className={cs(css.infoCardIcon)}
                        data-index={index}
                        style={{
                            backgroundImage: item.icon,
                            backgroundPosition: 'center center',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                        }}
                    ></div>
                    <div className={css.infoCardTitle}>{item.title}</div>
                    <div className={css.infoCardDescription}>{item.description}</div>
                </div>
            ))}
        </div>
    );
};
