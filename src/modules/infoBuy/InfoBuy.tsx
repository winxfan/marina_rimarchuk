import React, { FC, ReactNode } from 'react';
import { Link, useMatch } from 'react-router-dom';

import imageSrc from '../../assets/images/bookBlock/bookShow.png';
import { data } from '../../pages/main/components/BookBlock';
import { useBackButton } from '../../utils/hooks/useBackButton';
import css from './InfoBuy.module.scss';

export type InfoBuyProps = {
    children?: ReactNode;
    isShowBook?: boolean;
};

export const InfoBuy: FC<InfoBuyProps> = (props) => {
    const { children, isShowBook } = props;

    useBackButton('/');
    const match = useMatch('/book/:id');

    const id = Number(match?.params.id);
    const infoBuy = data.find((item) => item.id === id);

    return (
        <div className={css.infoBuy}>
            <div className={css.contentTitle}>{infoBuy?.contentTitle}</div>
            <div className={css.contentDescription}>{infoBuy?.contentInfo}</div>
            <div className={css.contentDescription}>
                {infoBuy?.contentList?.map((item) => (
                    <ul key={item.title}>
                        <li>{item.title}</li>
                    </ul>
                ))}
            </div>
            <div>{children}</div>
            <button type="button" className={css.contentCostButton}>
                <div className={css.contentCostLink}>
                    <div className={css.contentCostText}>{infoBuy?.buttonText}</div>
                    <div className={css.contentCostPrice}>{infoBuy?.price}</div>
                </div>
            </button>
            <Link to="/" className={css.contentPriceButton}>
                <div className={css.contentPriceLink}>
                    <div className={css.contentPriceText}>{infoBuy?.buttonBuy}</div>
                </div>
            </Link>
            {isShowBook ? <img src={imageSrc} className={css.contentBookShow} alt="book" /> : null}
        </div>
    );
};
