import { HeaderCancel } from '../../../modules/header/components/HeaderCancel';
import css from './AffirmationDay.module.scss';
import { AffirmationInfo } from './parts/AffirmationInfo';
import { WelcomeUser } from './parts/WelcomeUser';

export const AffirmationDay = () => {
    return (
        <div className={css.affirmationDay}>
            <HeaderCancel />
            <WelcomeUser />
            <AffirmationInfo />
        </div>
    );
};
