import React, { FC, ReactNode, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { ThunkDispatch } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

import { BonusInfoBuy } from '@/modules/bonus/BonusInfoBuy';
import PDFViewer from '@/modules/pdfViewer/PDFViewer';
import { getCheckPay } from '@/store/checkPaySlice';
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
    //console.log(id, '222');
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
    useEffect(() => {
        const fetchManualGet = async () => {
            await dispatch(manualsGet(+id));
        };

        fetchManualGet();
    }, [id, dispatch]);

    const manual = useSelector((state: ManualsGetResponse) => state.manualsGet);

    console.log(manual, 'manual2222');
    //
    // useEffect(() => {
    //     const fetchCheckPay = async () => {
    //         const apiToken = localStorage.getItem('api_token');
    //         console.log(id, 'id11');
    //         Cookies.set('api_token', apiToken);
    //         await dispatch(getCheckPay());
    //     };
    //
    //     fetchCheckPay();
    // }, [id, dispatch]);

    return (
        <div className={css.infoBuy}>
            <div className={css.contentTitle}>
                {isShowManual && manual.data ? manual?.data.name : null}
                {isShowManual ? infoBuy?.title : isShowCourse ? infoBuy?.title : infoBuy?.contentTitle}
            </div>
            <div className={css.contentDescription}>{isShowManual && manual.data ? manual.data.description : null}</div>
            <div className={css.contentDescription}>{isShowBook ? infoBuy?.contentInfo : null}</div>
            {/*<div className={css.contentDescription}>{isShowManual ? infoBuy?.description : infoBuy?.contentInfo}</div>*/}
            {isShowBook ? (
                <div className={css.contentDescription}>
                    {infoBuy?.contentList?.map((item) => (
                        <ul key={item.title}>
                            <li>{item.title}</li>
                        </ul>
                    ))}
                </div>
            ) : null}
            {infoBuy.bonus ? (
                <div>
                    <div style={{ marginBottom: '12px' }}>
                        <BonusInfoBuy>мини курс «Тело - храм» в подарок</BonusInfoBuy>
                    </div>
                    <BonusInfoBuy>печатная книга «Будь здоровым сейчас!»</BonusInfoBuy>
                </div>
            ) : null}

            <div className={css.infoBuyChildren}>{children}</div>

            {infoBuy.id !== '5' ? (
                <button type="button" className={css.contentCostButton}>
                    <div className={css.contentCostLink}>
                        <div className={css.contentCostText}>{isShowBook && infoBuy.descriptionPrice}</div>
                        <div className={css.contentCostText}>{isShowManual && infoBuy.descriptionPrice}</div>

                        <div className={css.contentCostText}>{isShowCourse && infoBuy.buttonText}</div>

                        <div className={css.contentCostPrice}>
                            <div className={css.contentCostPriceManual}>
                                {isShowManual ? <div className={css.contentCostText}>Стоимость методички</div> : null}
                                {isShowManual && manual.data ? `${manual.data.cost}₽` : null}
                            </div>
                        </div>
                        <div className={css.contentCostPrice}>{isShowBook && `${infoBuy.price} ₽`}</div>
                        <div className={css.contentCostPrice}>{isShowCourse && `${infoBuy.price} ₽`}</div>
                    </div>
                </button>
            ) : null}

            {infoBuy.id !== '5' ? (
                <Link
                    to={{
                        pathname: `/delivery/${id}`,
                        search: `price=${infoBuy.price}`,
                    }}
                    className={css.contentPriceButton}
                >
                    <div className={css.contentPriceLink}>
                        <div className={css.contentPriceText}>{isShowManual && 'Купить методичку'}</div>
                        <div className={css.contentPriceText}>{isShowCourse && infoBuy.buttonBuy}</div>
                        <div className={css.contentPriceText}>{isShowBook && infoBuy.buttonBuy}</div>
                    </div>
                </Link>
            ) : null}

            {infoBuy.book && <PDFViewer pdfUrl="https://content-water.plutus-fin.ru/books/book_1.pdf" />}
        </div>
    );
};
