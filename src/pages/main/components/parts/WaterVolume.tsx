import WaterIcon from '@/assets/images/waterTracker/waterIcon.svg';

import css from './WaterVolume.module.scss';

export type WaterVolumeProps = {
    sliderValue?: number;
};

export const WaterVolume = (props: WaterVolumeProps) => {
    const { sliderValue = 0 } = props;

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
                <div className={css.volume}>{sliderValue} из 2560 мл</div>
            </div>
        </div>
    );
};
