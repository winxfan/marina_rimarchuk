import React from 'react';
import { Link } from 'react-router-dom';

import cs from 'classnames';

import { ReactComponent as CourseIcon } from '../../assets/images/main/course.svg';
import { ReactComponent as HomeIcon } from '../../assets/images/main/home.svg';
import { ReactComponent as ManualIcon } from '../../assets/images/main/manual.svg';
import css from './Menu.module.scss';

export const Menu = () => {
    const isActive = (path: string) => {
        return window.location.pathname === path;
    };

    return (
        <div className={css.mainMenu}>
            <Link to="/manuals" className={cs(css.mainLink, isActive('/manuals') && css.activeLink)}>
                <div className={css.mainIcon}>
                    <ManualIcon />
                </div>
            </Link>
            <Link to="/" className={cs(css.mainLink, isActive('/') && css.activeLink)}>
                <div className={css.mainIcon}>
                    <HomeIcon />
                </div>
            </Link>
            <Link to="/courses" className={cs(css.mainLink, isActive('/courses') && css.activeLink)}>
                <div className={css.mainIcon}>
                    <CourseIcon />
                </div>
            </Link>
        </div>
    );
};
