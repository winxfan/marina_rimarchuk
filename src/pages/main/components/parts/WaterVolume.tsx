import { useState } from 'react';
import { useSelector } from 'react-redux';

import WaterIcon from '@/assets/images/waterTracker/waterIcon.svg';
import { AuthResponse, AuthUser } from '@/utils/types';

import css from './WaterVolume.module.scss';

export type WaterVolumeProps = {
    sliderValue?: number;
    authUser?: AuthUser;
};

export const WaterVolume = (props: WaterVolumeProps) => {
    const { sliderValue, authUser } = props;

    const [waterVolume, setWaterVolume] = useState(0);

    if (authUser.user.length) {
        setWaterVolume(authUser.user[0].water_ml);
    }

    // const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
    /*    const waterVolume: WaterData = useSelector((state: GetWaterResponse) => state.waterGet);

    useEffect(() => {
        dispatch(getWater());
    }, [sliderValue]);*/

    return (
        <div className={css.trackerInfo}>
            <div className={css.waterIcon}>
                <WaterIcon />
            </div>
            <div className={css.waterVolume}>
                <div className={css.volume}>{waterVolume ?? sliderValue} из 2560 мл</div>
            </div>
        </div>
    );
};
