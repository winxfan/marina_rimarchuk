import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import ArrowIcon from '@/assets/images/arrowIcon/arrow.svg';
import avatarIcon from '@/assets/images/welcomeUser/avatar.png';
import QuestionsIcon from '@/assets/images/welcomeUser/questions.svg';
import { getUser } from '@/store/currentUserSlice';
import { useTelegram } from '@/utils/hooks/useTelegram';
import { AuthResponse, AuthUser } from '@/utils/types';

import css from './WelcomeUser.module.scss';

export const WelcomeUser = () => {
    const { initDataUnsafe } = useTelegram();
    const [userImg, setUserImg] = useState('');

    const authUser: AuthUser = useSelector((state: AuthResponse) => state.auth);

    const userName = initDataUnsafe?.user?.first_name;

    useEffect(() => {
        const fetchUser = async () => {
            console.log(authUser.user[0], 'authUser.user[0]');
            if (authUser.user[0]) {
                console.log('Зашли в проверку');
                setUserImg(authUser?.user?.[0].user_img);
            }
        };

        if (authUser.user.length > 0) {
            fetchUser();
        }
    }, [authUser.user]);

    console.log(authUser, 'authUser WELCOME');
    console.log(userImg, 'userImg WELCOME');

    return (
        <div className={css.welcomeUser}>
            <Link to="/statistics">
                <div className={css.user}>
                    <div className={css.greetings}>
                        <img
                            src={userImg ? `data:image/png;base64,${userImg}` : ''}
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
