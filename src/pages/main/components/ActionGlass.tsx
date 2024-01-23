import { Link } from 'react-router-dom';

import { ReactComponent as EllipseIcon } from '../../../assets/images/actionGlass/ellipseIcon.svg';
import { ReactComponent as GlassIcon } from '../../../assets/images/actionGlass/glass.svg';
import css from './ActionGlass.module.scss';

export const ActionGlass = () => {
    return (
        <div className={css.actionGlass}>
            <div className={css.ellipseIcon}>
                <EllipseIcon />
                <div className={css.percent}>
                    <span className={css.number}>42%</span>
                </div>
            </div>
            <Link to="/" className={css.addGlass}>
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
