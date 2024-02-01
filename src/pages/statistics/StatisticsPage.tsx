import { ReactComponent as AvatarIcon } from '../../assets/images/statistics/avatar.svg';
import { useBackButton } from '../../utils/hooks/useBackButton';
import { useTelegram } from '../../utils/hooks/useTelegram';
import css from './StatisticsPage.module.scss';
import { MyStatistics } from './components/MyStatistics';

export const StatisticsPage = () => {
    useBackButton('/');
    const { initDataUnsafe } = useTelegram();

    const id = initDataUnsafe?.user?.id;

    return (
        <div className={css.statisticsWrapper}>
            <div className={css.statisticsPage}>
                <div className={css.userAvatar}>
                    <AvatarIcon />
                </div>
                <p className={css.username}>{initDataUnsafe?.user?.first_name ?? 'Аноним'}</p>
            </div>
            <MyStatistics />
        </div>
    );
};
