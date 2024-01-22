import React, { FC } from 'react';

import css from './StatisticInfoCard.module.scss';

export type StatisticInfoCardProps = {
    title?: string;
    description?: string;
    className?: any;
};

export const StatisticInfoCard: FC<StatisticInfoCardProps> = (props) => {
    const { title, description, className } = props;

    return (
        <div className={css.statisticInfoCard}>
            <div className={css.infoCardRow}>
                <div className={css.infoCardColumn}>
                    <div className={css.infoCardItem}>
                        <div className={css.infoCardIcon}></div>
                        <div className={css.infoCardTitle}>1000 мл</div>
                        <div className={css.infoCardDescription}>за неделю выпито воды</div>
                    </div>
                </div>
                <div className={css.infoCardColumn}>
                    <div className={css.infoCardItem}>
                        <div className={css.infoCameraIcon}></div>
                        <div className={css.infoCardTitle}>22 000 мл</div>
                        <div className={css.infoCardDescription}>за месяц выпито воды</div>
                    </div>
                </div>
            </div>
            <div className={css.infoCardRow}>
                <div className={css.infoCardColumn}>
                    <div className={css.infoCardItem}>
                        <div className={css.infoCardIcon}></div>
                        <div className={css.infoCardTitle}>10</div>
                        <div className={css.infoCardDescription}>Видео вы уже посмотрели</div>
                    </div>
                </div>
                <div className={css.infoCardColumn}>
                    <div className={css.infoCardItem}>
                        <div className={css.infoMicroIcon}></div>
                        <div className={css.infoCardTitle}>101</div>
                        <div className={css.infoCardDescription}>Подкастов вы уже послушали</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
