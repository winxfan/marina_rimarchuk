import { ActionGlass } from './ActionGlass';
import css from './WaterTracker.module.scss';
import { WaterTrackerHeader } from './parts/WaterTrackerHeader';

export const WaterTracker = () => {
    return (
        <div className={css.waterTracker}>
            <WaterTrackerHeader />
            <ActionGlass />
        </div>
    );
};
