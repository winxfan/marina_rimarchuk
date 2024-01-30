import React from 'react';
import { Link } from 'react-router-dom';

import imageSrc from '../../../../assets/images/tasks/stars.png';
import { ProgressBar } from '../../../../modules/progressBar/ProgressBar';
import { StatisticInfoCard } from './StatisticInfoCard';
import css from './StatisticLevel.module.scss';

export const StatisticLevel = () => {
    return (
        <>
            <div className={css.statisticLevelWrapper}>
                <div className={css.levelCard}>
                    <div className={css.levelCurrent}>
                        <img src={imageSrc} className={css.currentIcon} alt="level icon" />
                        <div className={css.currentInfo}>
                            <div className={css.infoTitle}>Звездочка</div>
                            <div className={css.infoDescription}>Ваш текущий уровень</div>
                        </div>
                    </div>
                    <div className={css.completeLevel}>
                        <div className={css.completeTitle}>До следующего уровня выполнено:</div>
                        <ProgressBar percent={55} />
                    </div>
                    <Link to="/tasks" className={css.watchQuestion}>
                        <div className={css.watchText}>Смотреть задания</div>
                    </Link>
                </div>
            </div>
            <StatisticInfoCard />
        </>
    );
};
