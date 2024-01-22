import { FC } from 'react';

import cs from 'classnames';

import css from './HeaderPage.module.scss';

export type HeaderPageProps = {
    className?: any;
    title?: string;
    isVideoBlock?: boolean;
};

export const HeaderPage: FC<HeaderPageProps> = (props) => {
    const { title, isVideoBlock } = props;

    return <div className={cs(css.headerPage, isVideoBlock ? css.headerVideoTitle : '')}>{title}</div>;
};
