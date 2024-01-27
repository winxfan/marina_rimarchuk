import React, { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';

import imageSrc from '../../assets/images/bookBlock/bookShow.png';
import { useBackButton } from '../../utils/hooks/useBackButton';
import { IBookBlock } from '../../utils/types/book';
import { IManuals } from '../../utils/types/manuals';
import css from './InfoBuy.module.scss';

export type InfoBuyProps = {
    children?: ReactNode;
    infoBuy?: IBookBlock | IManuals;
    isShowBook?: boolean;
    isShowManual?: boolean;
};

export const InfoBuy: FC<InfoBuyProps> = (props) => {
    const { children, isShowBook, isShowManual, infoBuy } = props;

    useBackButton('/');

    return (
        <div className={css.infoBuy}>
            <div className={css.contentTitle}>{isShowManual ? infoBuy?.title : infoBuy?.contentTitle}</div>
            <div className={css.contentDescription}>{isShowManual ? infoBuy?.description : infoBuy?.contentInfo}</div>
            {isShowBook ? (
                <div className={css.contentDescription}>
                    {infoBuy?.contentList?.map((item) => (
                        <ul key={item.title}>
                            <li>{item.title}</li>
                        </ul>
                    ))}
                </div>
            ) : null}
            <div>{children}</div>
            <button type="button" className={css.contentCostButton}>
                <div className={css.contentCostLink}>
                    <div className={css.contentCostText}>{infoBuy?.buttonText}</div>
                    <div className={css.contentCostPrice}>{infoBuy?.price}</div>
                </div>
            </button>
            <Link to="/delivery" className={css.contentPriceButton}>
                <div className={css.contentPriceLink}>
                    <div className={css.contentPriceText}>{infoBuy?.buttonBuy}</div>
                </div>
            </Link>
            {isShowBook ? <img src={imageSrc} className={css.contentBookShow} alt="book" /> : null}
        </div>
    );
};
