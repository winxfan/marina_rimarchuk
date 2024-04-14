import { useSelector } from 'react-redux';

import WaterIcon from '@/assets/images/waterTracker/waterIcon.svg';
import { AuthResponse, AuthUser } from '@/utils/types';

import css from './WaterVolume.module.scss';

export type WaterVolumeProps = {
    sliderValue?: number;
};

export const WaterVolume = (props: WaterVolumeProps) => {
    const { sliderValue } = props;
    const authUser: AuthUser = useSelector((state: AuthResponse) => state.auth);
    const waterVolume = authUser.user[0].water_ml;
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
                <div className={css.volume}>{waterVolume} из 2560 мл</div>
            </div>
        </div>
    );
};
