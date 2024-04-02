import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ThunkDispatch } from '@reduxjs/toolkit';

import WaterIcon from '@/assets/images/waterTracker/waterIcon.svg';
import { authToken } from '@/store/authSlice';
import { getUser } from '@/store/currentUserSlice';
import { getWater } from '@/store/waterGetSlice';
import { UserGet, UserGetResponse } from '@/utils/types';
import { GetWaterResponse, WaterData } from '@/utils/types/water';

import css from './WaterVolume.module.scss';

export type WaterVolumeProps = {
    sliderValue?: number;
};

export const WaterVolume: FC<WaterVolumeProps> = (props) => {
    const { sliderValue } = props;

    const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
    // const waterVolume: WaterData = useSelector((state: GetWaterResponse) => state.waterGet);
    //
    // useEffect(() => {
    //     dispatch(getWater());
    // }, []);

    return (
        <div className={css.trackerInfo}>
            <div className={css.waterIcon}>
                <WaterIcon />
            </div>
            <div className={css.waterVolume}>
                <div className={css.volume}>{sliderValue ?? 0} из 2560 мл</div>
            </div>
        </div>
    );
};
