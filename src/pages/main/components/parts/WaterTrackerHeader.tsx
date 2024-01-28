import css from './WaterTrackerHeader.module.scss';
import { WaterVolume } from './WaterVolume';

export const WaterTrackerHeader = () => {
    return (
        <div className={css.waterTrackerHeader}>
            <div className={css.trackerTitle}>Трекер воды</div>
            <WaterVolume />
        </div>
    );
};
