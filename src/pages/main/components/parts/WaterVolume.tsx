import { FC } from 'react';

import { ReactComponent as WaterIcon } from '../../../../assets/images/waterTracker/waterIcon.svg';
import css from './WaterVolume.module.scss';

export type WaterVolumeProps = {
    currentLevel?: number;
};

export const WaterVolume: FC<WaterVolumeProps> = (props) => {
    const { currentLevel } = props;

    return (
        <div className={css.trackerInfo}>
            <div className={css.waterIcon}>
                <WaterIcon />
            </div>
            <div className={css.waterVolume}>
                <div className={css.volume}>{currentLevel ?? 0} из 2555 мл</div>
            </div>
        </div>
    );
};
