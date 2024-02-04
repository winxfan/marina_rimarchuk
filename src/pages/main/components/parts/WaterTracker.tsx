import React, { BaseSyntheticEvent, useEffect, useRef, useState } from 'react';

import cs from 'classnames';

import CupIcon from '@/assets/images/actionGlass/cup.svg';
import CupBlackIcon from '@/assets/images/actionGlass/cupBlack.svg';
import MinusIcon from '@/assets/images/actionGlass/minus.svg';
import PlusIcon from '@/assets/images/actionGlass/plus.svg';
import { HeaderPage } from '@/modules/header/components/HeaderPage';
import { useBackButton } from '@/utils/hooks/useBackButton';

import css from './WaterTracker.module.scss';
import { WaterVolume } from './WaterVolume';

export const WaterTracker = () => {
    useBackButton('/');

    const [currentLevel, setCurrentLevel] = useState(0);
    const [sliderValue, setSliderValue] = useState(0);
    const [adjustedHeight, setAdjustedHeight] = useState(178);

    const handleSliderChange = (e: BaseSyntheticEvent) => {
        const newValue = +e.target.value;
        setSliderValue(newValue);
        setCurrentLevel(newValue);
    };

    useEffect(() => {
        const scale = (num: number, inMin: number, inMax: number, outMin: number, outMax: number) => {
            return ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
        };

        const range = document.getElementById('range') as HTMLInputElement;
        const label = range?.nextElementSibling as HTMLLabelElement;

        if (range) {
            const rangeWidth = getComputedStyle(range).getPropertyValue('width');
            const labelWidth = getComputedStyle(label).getPropertyValue('width');

            const numWidth = +rangeWidth.substring(0, rangeWidth.length - 2);
            const numLabelWidth = +labelWidth.substring(0, labelWidth.length - 2);

            const max = +range.max;
            const min = +range.min;

            label.style.left =
                sliderValue * (numWidth / max) - numLabelWidth / 2 + scale(sliderValue, min, max, 10, -10) + 'px';
            label.innerHTML = sliderValue.toString();

            range.style.setProperty('--thumb-after-width', `${sliderValue}%`);
        }
    }, [sliderValue]);

    const handleDecrease = () => {
        setSliderValue((prevValue) => Math.max(prevValue - 365, 0));
        setCurrentLevel((prevValue) => Math.max(prevValue - 365, 0));
        setAdjustedHeight((prevHeight) => Math.max(prevHeight - 31, 178));
    };

    const handleIncrease = () => {
        setSliderValue((prevValue) => Math.min(prevValue + 365, 2555));
        setCurrentLevel((prevValue) => Math.min(prevValue + 365, 2555));

        setAdjustedHeight((prevHeight) => Math.min(prevHeight + 31, 395));
    };

    const handleSliderMouseUp = (e: BaseSyntheticEvent) => {
        setAdjustedHeight((prevHeight) => Math.min(prevHeight + (e.target.value / 2555) * 100, 395));
    };

    const handleSliderMouseDown = (e: BaseSyntheticEvent) => {
        console.log(e, 'e');
        setAdjustedHeight((prevHeight) => Math.max(prevHeight - (e.target.value / 2555) * 100, 178));
    };

    const rangeRef = useRef<HTMLDivElement>(null);

    const backgroundStyle = {
        background: `linear-gradient(to top, #4460F6 1%, #12237A ${adjustedHeight}px, transparent 0)`,
    };

    return (
        <div className={css.waterTrackerWrapper} style={backgroundStyle}>
            <div className={css.waterTracker}>
                <HeaderPage title="Вода" className={css.waterHeader} />
                <WaterVolume currentLevel={currentLevel} />
            </div>
            <div ref={rangeRef} className={css.range}>
                <div className={css.cupIcon}>
                    <CupIcon />
                </div>
                <div className={css.field}>
                    <button className={cs(css.controlsWater, css.minusIcon)} onClick={handleDecrease}>
                        <MinusIcon />
                    </button>
                    <div className={css.rangeWithScale}>
                        <div className={css.scaleValues}>
                            {Array.from({ length: 8 }, (_, index) => (
                                <span key={index * 365} className={css.mark}></span>
                            ))}
                        </div>
                        <div className={css.rangeContainer}>
                            <input
                                type="range"
                                id="range"
                                min="0"
                                max="2555"
                                step="365"
                                value={sliderValue}
                                onChange={handleSliderChange}
                                onMouseDown={handleSliderMouseDown}
                                onMouseUp={handleSliderMouseUp}
                            />
                            <label htmlFor="range">{sliderValue}</label>
                        </div>
                    </div>
                    <button className={cs(css.controlsWater, css.plusIcon)} onClick={handleIncrease}>
                        <div className={css.controlsText}>мл</div>
                        <PlusIcon />
                    </button>
                    {/*  <div className={css.sliderValue}>
                        <span className={css.sliderNumber}>{sliderValue}</span>
                    </div>*/}
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
