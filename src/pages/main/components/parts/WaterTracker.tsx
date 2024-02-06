import React, {BaseSyntheticEvent, useCallback, useEffect, useRef, useState} from 'react';

import cs from 'classnames';

import CupIcon from '@/assets/images/actionGlass/cup.svg';
import CupBlackIcon from '@/assets/images/actionGlass/cupBlack.svg';
import MinusIcon from '@/assets/images/actionGlass/minus.svg';
import PlusIcon from '@/assets/images/actionGlass/plus.svg';
import { HeaderPage } from '@/modules/header/components/HeaderPage';
import WaterWaveImage from '@/pages/main/components/parts/WaterWaveImage';
import { useBackButton } from '@/utils/hooks/useBackButton';

import css from './WaterTracker.module.scss';
import { WaterVolume } from './WaterVolume';

const MAX_SIZE = 2560;
const CONTAINER_HEIGHT_PX = 238;

export const WaterTracker = () => {
    useBackButton('/');

    const [currentLevel, setCurrentLevel] = useState(0);
    const [sliderValue, setSliderValue] = useState(0);
    const [adjustedHeight, setAdjustedHeight] = useState(0);

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
        setAdjustedHeight((value) => (value - 365) / MAX_SIZE * CONTAINER_HEIGHT_PX);
    };

    const handleIncrease = () => {
        setSliderValue((prevValue) => Math.min(prevValue + 365, 2560));
        setCurrentLevel((prevValue) => Math.min(prevValue + 365, 2560));

        setAdjustedHeight((value) => (value + 365) / MAX_SIZE * CONTAINER_HEIGHT_PX);
    };

    const handleSliderMouseUp = (e: BaseSyntheticEvent) => {
        const value = e.target.value ?? 0;
        setAdjustedHeight(value / MAX_SIZE * CONTAINER_HEIGHT_PX);
    };

    const handleSliderMouseDown = (e: BaseSyntheticEvent) => {
        const value = e.target.value ?? 0;
        setAdjustedHeight(value / MAX_SIZE * CONTAINER_HEIGHT_PX);
    };

    const rangeRef = useRef<HTMLDivElement>(null);

    return (
        <div className={css.waterTrackerWrapper}>
            <div className={css.waterTrackerProgress} style={{ transform: `translateY(${-adjustedHeight}px)`  }}>
                <div className={css.background}>
                    <svg
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="100%"
                        height="100%"
                        viewBox="0 0 1600 990"
                    >
                        <defs>
                            <linearGradient id="bg" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="rgb(68, 96, 246)"></stop>
                                <stop offset="100%" stopColor="rgb(18, 35, 122)"></stop>
                            </linearGradient>
                            <path
                                id="wave"
                                fill="url(#bg)"
                                d="M-363.852,502.589c0,0,236.988-41.997,505.475,0
      s371.981,38.998,575.971,0s293.985-39.278,505.474,5.859s493.475,48.368,716.963-4.995v560.106H-363.852V502.589z"
                            />
                        </defs>
                        <g>
                            <use xlinkHref="#wave" opacity=".3">
                                <animateTransform
                                    attributeName="transform"
                                    attributeType="XML"
                                    type="translate"
                                    dur="8s"
                                    calcMode="spline"
                                    values="270 230; -334 180; 270 230"
                                    keyTimes="0; .5; 1"
                                    keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                                    repeatCount="indefinite"
                                />
                            </use>
                            <use xlinkHref="#wave" opacity=".9">
                                <animateTransform
                                    attributeName="transform"
                                    attributeType="XML"
                                    type="translate"
                                    dur="4s"
                                    calcMode="spline"
                                    values="0 230;-140 200;0 230"
                                    keyTimes="0; .4; 1"
                                    keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                                    repeatCount="indefinite"
                                />
                            </use>
                        </g>
                    </svg>
                </div>
            </div>
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
                                max="2560"
                                value={sliderValue}
                                onChange={handleSliderChange}
                                onMouseDown={handleSliderMouseDown}
                                onMouseUp={handleSliderMouseUp}
                                className={css.rangeInput}
                            />
                            <label htmlFor="range">{sliderValue}</label>
                        </div>
                    </div>
                    <button className={cs(css.controlsWater, css.plusIcon)} onClick={handleIncrease}>
                        <div className={css.ml}>мл</div>
                        <PlusIcon />
                    </button>
                </div>
            </div>
            <button className={css.addGlass}>
                <div className={css.addGlassIcon}>
                    <CupBlackIcon />
                </div>
                <p className={css.addGlassText}>Добавить стакан&nbsp;+</p>
            </button>
        </div>
    );
};
