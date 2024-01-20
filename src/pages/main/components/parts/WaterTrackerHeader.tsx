import css from './WaterTrackerHeader.module.scss';

export const WaterTrackerHeader = () => {
    return (
        <div className={css.waterTrackerHeader}>
            <div className={css.trackerTitle}>Трекер воды</div>
            <div className={css.trackerInfo}>
                <div className={css.waterIcon}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path
                            d="M9.55446 3.56327C8.45194 1.84174 7.33339 0.421887 7.32223 0.407723L7.00015 0L6.67809 0.40775C6.66694 0.421887 5.54839 1.84174 4.44586 3.5633C2.93725 5.91883 2.17236 7.70238 2.17236 8.86441C2.17236 11.6962 4.3381 14 7.00018 14C9.66225 14 11.828 11.6962 11.828 8.86441C11.828 7.70238 11.0631 5.91883 9.55446 3.56327Z"
                            fill="#6D9DDC"
                        />
                    </svg>
                </div>
                <div className={css.waterVolume}>
                    <div className={css.volume}>1280 из 2560 мл</div>
                </div>
            </div>
        </div>
    );
};
