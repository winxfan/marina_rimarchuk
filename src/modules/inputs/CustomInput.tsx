import React, { FC } from 'react';

import css from './CustomInput.module.scss';

export type CustomInputProps = any;

export const CustomInput: FC<CustomInputProps> = (props) => {
    const { label, value, onChange } = props;

    return (
        <div className={css.inputWrapper}>
            <input {...props} className={css.input} value={value} onChange={onChange} />
            <label className={css.inputLabel}>{label}</label>
        </div>
    );
};
