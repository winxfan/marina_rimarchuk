import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import ArrowIcon from '@/assets/images/arrowIcon/arrow.svg';
import avatarIcon from '@/assets/images/welcomeUser/avatar.png';
import QuestionsIcon from '@/assets/images/welcomeUser/questions.svg';
import { AuthResponse, AuthUser } from '@/utils/types';

import css from './WelcomeUser.module.scss';

export const WelcomeUser = () => {
    const authUser: AuthUser = useSelector((state: AuthResponse) => state.auth);

    const userName = authUser.user[0].user_name;
    const userImg = authUser.user[0].user_img;
    console.log(authUser, 'authUser WELCOME');

    return (
        <div className={css.welcomeUser}>
            <Link to="/statistics">
                <div className={css.user}>
                    <div className={css.greetings}>
                        <img
                            src={userImg ? `data:image/png;base64,${userImg}` : avatarIcon}
                            className={css.userAvatar}
                            alt="avatar"
                        />

                        <div className={css.userInfo}>
                            <div className={css.helloUser}>Привет</div>
                            <div className={css.username}>{userName ?? 'Аноним'}</div>
                        </div>
                    </div>
                    <button type="button" className={css.arrowIcon}>
                        <ArrowIcon />
                    </button>
                </div>
            </Link>
            <button type="button" className={css.questions}>
                <Link to="/questions">
                    <QuestionsIcon />
                </Link>
            </button>
        </div>
    );
};
