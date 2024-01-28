import React, { BaseSyntheticEvent, useState } from 'react';

import { ReactComponent as CupIcon } from '../../../../assets/images/actionGlass/cup.svg';
import { ReactComponent as CupBlackIcon } from '../../../../assets/images/actionGlass/cupBlack.svg';
import { ReactComponent as MinusIcon } from '../../../../assets/images/actionGlass/minus.svg';
import { ReactComponent as PlusIcon } from '../../../../assets/images/actionGlass/plus.svg';
import { HeaderPage } from '../../../../modules/header/components/HeaderPage';
import { useBackButton } from '../../../../utils/hooks/useBackButton';
import css from './WaterTracker.module.scss';
import { WaterVolume } from './WaterVolume';

export const WaterTracker = () => {
    useBackButton('/');

    const [currentLevel, setCurrentLevel] = useState(0);
    const [sliderValue, setSliderValue] = useState(0);

    const handleSliderChange = (e: BaseSyntheticEvent) => {
        const value = parseInt(e.target.value, 10);
        setSliderValue(value);
        setCurrentLevel(value);
    };

    const handleDecrease = () => {
        setSliderValue((prevValue) => Math.max(prevValue - 160, 0));
        setCurrentLevel((prevValue) => Math.max(prevValue - 160, 0));
    };

    const handleIncrease = () => {
        setSliderValue((prevValue) => Math.min(prevValue + 160, 2560));
        setCurrentLevel((prevValue) => Math.min(prevValue + 160, 2560));
    };

    return (
        <div className={css.waterTrackerWrapper}>
            <div className={css.waterTracker}>
                <HeaderPage title="Вода" className={css.waterHeader} />
                <WaterVolume currentLevel={currentLevel} />
            </div>
            <div className={css.range}>
                <div>
                    <CupIcon />
                </div>
                <div className={css.field}>
                    <button className={css.controlsWater} onClick={handleDecrease}>
                        <MinusIcon />
                    </button>
                    <input
                        type="range"
                        min="0"
                        max="2560"
                        step="160"
                        value={sliderValue}
                        onChange={handleSliderChange}
                        className={css.sliderInput}
                    />
                    <button className={css.controlsWater} onClick={handleIncrease}>
                        <div className={css.controlsText}>мл</div>
                        <PlusIcon />
                    </button>
                    <div className={css.sliderValue}>
                        <span className={css.sliderNumber}>{sliderValue}</span>
                    </div>
                </div>
            </div>
            <button className={css.addGlass}>
                <div className={css.glassIcon}>
                    <CupBlackIcon />
                </div>
                <div className={css.glassAdd}>
                    <p>Добавить стакан&nbsp;+</p>
                </div>
            </button>
        </div>
    );
};
