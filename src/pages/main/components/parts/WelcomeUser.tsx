import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { ReactComponent as ArrowIcon } from '../../../../assets/images/arrowIcon/arrow.svg';
import { ReactComponent as AvatarIcon } from '../../../../assets/images/welcomeUser/avatar.svg';
import { ReactComponent as QuestionsIcon } from '../../../../assets/images/welcomeUser/questions.svg';
import { getUsersAll } from '../../../../store/userSlice';
import css from './WelcomeUser.module.scss';

export const WelcomeUser = () => {
    /*    const dispatch = useDispatch();
    const users = useSelector((state) => state);

    useEffect(() => {
        dispatch(getUsersAll);
    }, [dispatch]);*/

    /* console.log(users, 'users');*/

    return (
        <div className={css.welcomeUser}>
            <div className={css.user}>
                <div className={css.greetings}>
                    <div className={css.userAvatar}>
                        <AvatarIcon />
                    </div>
                    <div className={css.userInfo}>
                        <div className={css.helloUser}>Привет</div>
                        <div className={css.username}>Ангелина</div>
                    </div>
                </div>
                <button type="button" className={css.arrowIcon}>
                    <ArrowIcon />
                </button>
            </div>
            <button type="button" className={css.questions}>
                <Link to="/questions">
                    <QuestionsIcon />
                </Link>
            </button>
        </div>
    );
};
