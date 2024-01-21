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
            <button type="button" className={css.addGlass}>
                <Link to="/" className={css.link}>
                    <div className={css.glassIcon}>
                        <GlassIcon />
                    </div>
                    <div className={css.glassAdd}>
                        <span>Добавить стакан +</span>
                    </div>
                </Link>
            </button>
        </div>
    );
};
