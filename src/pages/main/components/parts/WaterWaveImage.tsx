import React, { FC } from 'react';

import css from './WaterWaveImage.module.scss';

export type WaterWaveImageProps = {
    adjustedHeight: number;
};

const WaterWaveImage: FC<WaterWaveImageProps> = (props) => {
    const { adjustedHeight } = props;

    return (
        <svg
            width="100%"
            height={adjustedHeight + 25}
            viewBox={`0 0 100% ${adjustedHeight}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={css.waveImage}
            style={{ width: '100%' }}
        >
            <path
                d="M-1 11.0243C230.113 -17.4737 225 79.5 562 1.02426V399H-1V11.0243Z"
                fill="url(#paint0_linear_1040_7211)"
                stroke="url(#paint1_linear_1040_7211)"
            />
            <defs>
                <linearGradient
                    id="paint0_linear_1040_7211"
                    x1="231"
                    y1="5"
                    x2="231"
                    y2="349"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#4460F7" />
                    <stop offset="1" stopColor="#12237A" />
                </linearGradient>
                <linearGradient
                    id="paint1_linear_1040_7211"
                    x1="231"
                    y1="5"
                    x2="231"
                    y2="349"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="white" stopOpacity="0.36" />
                    <stop offset="1" stopOpacity="0" />
                </linearGradient>
            </defs>
        </svg>
    );
};

export default WaterWaveImage;
