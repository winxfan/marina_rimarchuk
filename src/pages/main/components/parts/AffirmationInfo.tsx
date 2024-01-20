import css from './AffirmationInfo.module.scss';

export const AffirmationInfo = () => {
    return (
        <div className={css.affirmation}>
            <div className={css.affirmationTitle}>Аффирмация дня</div>
            <div className={css.affirmationDescription}>
                Беспокойный мозг не дает шансов достичь целей. Нужно стать спокойным и убрать мысли
            </div>
        </div>
    );
};
