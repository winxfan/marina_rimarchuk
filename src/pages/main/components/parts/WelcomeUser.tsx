import { Link } from 'react-router-dom';

import ArrowIcon from '@/assets/images/arrowIcon/arrow.svg';
import avatarIcon from '@/assets/images/welcomeUser/avatar.png';
import QuestionsIcon from '@/assets/images/welcomeUser/questions.svg';
import { useTelegram } from '@/utils/hooks/useTelegram';

import css from './WelcomeUser.module.scss';

export const WelcomeUser = () => {
    const { initDataUnsafe } = useTelegram();

    const id = initDataUnsafe?.user?.id;
    const userName = initDataUnsafe?.user?.first_name;

    return (
        <div className={css.welcomeUser}>
            <Link to="/statistics">
                <div className={css.user}>
                    <div className={css.greetings}>
                        <img src={avatarIcon} className={css.userAvatar} alt="avatar" />

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
