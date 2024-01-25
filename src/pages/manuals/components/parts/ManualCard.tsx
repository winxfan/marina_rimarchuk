import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as ManualBook } from '../../../../assets/images/manuals/book.svg';
import { ReactComponent as BuyBook } from '../../../../assets/images/manuals/buy.svg';
import { ReactComponent as DownloadBook } from '../../../../assets/images/manuals/download.svg';
import { IManuals } from '../../../../utils/types/manuals';
import css from './ManualCard.module.scss';

export type ManualCardProps = IManuals & {
    index?: number;
    className?: any;
    isPage?: boolean;
};

export const ManualCard: FC<ManualCardProps> = (props) => {
    const { title, description, buy, id } = props;

    return (
        <div className={css.manualCard}>
            <Link to={`/manual/${id}`} className={css.manualLink}>
                <div className={css.iconColumn}>
                    <ManualBook />
                </div>
                <div className={css.textColumn}>
                    <div className={css.title}>{title}</div>
                    <div className={css.description}>{description}</div>
                </div>
            </Link>
            <div className={css.iconColumn}>{buy ? <BuyBook /> : <DownloadBook />}</div>
        </div>
    );
};
