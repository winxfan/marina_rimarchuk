import React, { FC } from 'react';

import cs from 'classnames';

import cameraImage from '@/assets/images/statistics/camera.png';
import microImage from '@/assets/images/statistics/micro.png';
import waterImage from '@/assets/images/statistics/water.png';
import { IStatisticInfoCard } from '@/utils/types/statistic';

import css from './StatisticInfoCard.module.scss';

export type StatisticInfoCardProps = {
    className?: any;
};

const data: IStatisticInfoCard[] = [
    { id: '1', title: '0 мл', description: 'за неделю выпито воды', icon: waterImage },
    { id: '2', title: '0 мл', description: 'за месяц выпито воды', icon: waterImage },
    { id: '3', title: '0', description: 'Видео вы уже посмотрели', icon: cameraImage },
    { id: '4', title: '0', description: 'Подкастов вы уже послушали', icon: microImage },
];

export const StatisticInfoCard: FC<StatisticInfoCardProps> = (props) => {
    const { className } = props;

    return (
        <div className={cs(css.statisticInfoCard, className)}>
            {data.map((item) => (
                <div key={item.id} className={cs(css.infoCardItem)}>
                    <img src={item.icon} className={css.infoCardIcon} alt="icon statistic" />
                    <div className={css.infoCardTitle}>{item.title}</div>
                    <div className={css.infoCardDescription}>{item.description}</div>
                </div>
            ))}
        </div>
    );
};
