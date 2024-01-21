import { FC } from 'react';

import css from './HeaderPage.module.scss';

export type HeaderPageProps = {
    className?: any;
    title?: string;
};

export const HeaderPage: FC<HeaderPageProps> = (props) => {
    const { className, title } = props;

    return <div className={css.headerPage}>{title}</div>;
};
