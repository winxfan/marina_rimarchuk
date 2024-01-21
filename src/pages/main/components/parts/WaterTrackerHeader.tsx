import { ReactComponent as WaterIcon } from '../../../../assets/images/waterTracker/waterIcon.svg';
import css from './WaterTrackerHeader.module.scss';

export const WaterTrackerHeader = () => {
    return (
        <div className={css.waterTrackerHeader}>
            <div className={css.trackerTitle}>Трекер воды</div>
            <div className={css.trackerInfo}>
                <div className={css.waterIcon}>
                    <WaterIcon />
                </div>
                <div className={css.waterVolume}>
                    <div className={css.volume}>1280 из 2560 мл</div>
                </div>
            </div>
        </div>
    );
};
