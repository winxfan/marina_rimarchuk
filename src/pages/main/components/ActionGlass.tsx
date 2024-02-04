import { Link } from 'react-router-dom';

import GlassIcon from '@/assets/images/actionGlass/glass.svg';
import { CircleProgressBar } from '@/modules/progressBar/CircleProgressBar';

import css from './ActionGlass.module.scss';

export const ActionGlass = () => {
    return (
        <div className={css.actionGlass}>
            <CircleProgressBar circleWidth={83} percent={42} />
            <Link to="/waterTracker" className={css.addGlass}>
                <div className={css.glassIcon}>
                    <GlassIcon />
                </div>
                <div className={css.glassAdd}>
                    <p>Добавить стакан&nbsp;+</p>
                </div>
            </Link>
        </div>
    );
};
