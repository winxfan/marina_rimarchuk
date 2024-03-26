import React, { FC, ReactNode, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { ThunkDispatch } from '@reduxjs/toolkit';

import PDFViewer from '@/modules/pdfViewer/PDFViewer';
import { manualsGet } from '@/store/manualsGetSlice';
import { useBackButton } from '@/utils/hooks/useBackButton';
import { IBookBlock } from '@/utils/types/book';
import { ICourseCard } from '@/utils/types/courses';
import { IManuals, Manuals, ManualsGetResponse } from '@/utils/types/manuals';

import css from './InfoBuy.module.scss';

export type InfoBuyProps = {
    children?: ReactNode;
    infoBuy?: IBookBlock | IManuals | ICourseCard | Manuals;
    isShowBook?: boolean;
    isShowManual?: boolean;
    isShowCourse?: boolean;
    id?: string | number;
};

export const InfoBuy: FC<InfoBuyProps> = (props) => {
    const { children, isShowBook, isShowManual, isShowCourse, infoBuy, id } = props;

    useBackButton('/');
    console.log(id, '222');
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
    useEffect(() => {
        const fetchManualGet = async () => {
            await dispatch(manualsGet(+id));
        };

        fetchManualGet();
    }, [id, dispatch]);

    const manual = useSelector((state: ManualsGetResponse) => state.manualsGet);

    console.log(infoBuy, 'infoBuy');

    return (
        <div className={css.infoBuy}>
            <div className={css.contentTitle}>
                {isShowManual && manual.data ? manual?.data.name : null}
                {isShowManual ? infoBuy?.title : isShowCourse ? infoBuy?.title : infoBuy?.contentTitle}
            </div>
            <div className={css.contentDescription}>{isShowManual && manual.data ? manual.data.description : null}</div>
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
            <div className={css.infoBuyChildren}>{children}</div>
            <button type="button" className={css.contentCostButton}>
                <div className={css.contentCostLink}>
                    <div className={css.contentCostText}>{isShowBook && infoBuy.descriptionPrice}</div>
                    <div className={css.contentCostText}>{isShowManual && infoBuy.descriptionPrice}</div>
                    <div className={css.contentCostText}>{isShowCourse && infoBuy.buttonText}</div>
                    <div className={css.contentCostPrice}>{isShowManual && manual.data ? manual.data.cost : null}</div>
                    <div className={css.contentCostPrice}>{isShowBook && infoBuy.price}</div>
                    <div className={css.contentCostPrice}>{isShowCourse && infoBuy.price}</div>
                </div>
            </button>
            <Link to={`/delivery/${id}`} className={css.contentPriceButton}>
                <div className={css.contentPriceLink}>
                    <div className={css.contentPriceText}>{isShowManual && infoBuy.buttonBuy}</div>
                    <div className={css.contentPriceText}>{isShowCourse && infoBuy.buttonBuy}</div>
                    <div className={css.contentPriceText}>{isShowBook && infoBuy.buttonBuy}</div>
                </div>
            </Link>
            {isShowBook && <PDFViewer pdfUrl="http://api-wather.plutus-fin.ru/books/book_1.pdf" />}
        </div>
    );
};
