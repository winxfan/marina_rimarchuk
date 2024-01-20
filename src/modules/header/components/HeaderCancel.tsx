import { ReactComponent as Dots } from '../../../assets/images/dotsGroup/dots.svg';
import css from './HeaderCancel.module.scss';

export const HeaderCancel = () => {
    return (
        <div className={css.headerCancel}>
            <a href="/" className={css.buttonCancel}>
                Отмена
            </a>
            <div className={css.botName}>
                <div className={css.shortName}>Марина Римарчук</div>
                <div className={css.descriptionName}>бот</div>
            </div>
            <button className={css.dotsGroup} type="button">
                <Dots />
            </button>
        </div>
    );
};
