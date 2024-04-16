import React, { FC, ReactNode, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { ThunkDispatch } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';
import { info } from 'sass';

import { BonusInfoBuy } from '@/modules/bonus/BonusInfoBuy';
import PDFViewer from '@/modules/pdfViewer/PDFViewer';
import { getCheckPay } from '@/store/checkPaySlice';
import { manualsGet } from '@/store/manualsGetSlice';
import { useBackButton } from '@/utils/hooks/useBackButton';
import { IBookBlock } from '@/utils/types/book';
import { ICourseCard } from '@/utils/types/courses';
import { IManuals, Manuals, ManualsGetResponse } from '@/utils/types/manuals';
import { GetCheckPayResponse } from '@/utils/types/pay';

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
    const [courseIdList, setCourseIdList] = useState([]);
    const [isIdInCourseIdList, setIsIdInCourseIdList] = useState(false);

    const [manualIdList, setManualIdList] = useState([]);
    const [isIdInManualIdList, setIsIdInManualIdList] = useState(false);
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

    const courseId = useSelector((state: GetCheckPayResponse) => state.checkPay.data.course_id);
    const manualsId = useSelector((state: GetCheckPayResponse) => state.checkPay.data.manuals_id);

    console.log(isIdInManualIdList, 'isIdInManualIdList111');

    useEffect(() => {
        if (courseId) {
            setCourseIdList(courseId);
        }
    }, [courseId]);

    useEffect(() => {
        if (manualsId) {
            setManualIdList(manualsId);
        }
    }, [manualsId]);

    useEffect(() => {
        if (courseIdList?.includes(id)) {
            setIsIdInCourseIdList(true);
        } else {
            setIsIdInCourseIdList(false);
        }
    }, [id, courseIdList]);

    useEffect(() => {
        if (manualIdList?.includes(id)) {
            setIsIdInManualIdList(true);
        } else {
            setIsIdInManualIdList(false);
        }
    }, [id, manualIdList]);

    console.log(isShowManual, 'isShowManual');
    console.log((infoBuy.id !== '5' && !isIdInCourseIdList) || !isIdInManualIdList, '1');
    console.log(infoBuy.id !== '5' && !isIdInCourseIdList && !isIdInManualIdList, '2');
    console.log(infoBuy.id !== '5' || (!isIdInCourseIdList && !isIdInManualIdList), '3');

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

            {(infoBuy.id !== '5' && !isIdInCourseIdList) || !isIdInManualIdList ? (
                <button type="button" className={css.contentCostButton}>
                    <div className={css.contentCostLink}>
                        {isShowBook ? <div className={css.contentCostText}>{infoBuy.descriptionPrice}</div> : null}
                        {isShowManual ? <div className={css.contentCostText}>{infoBuy.descriptionPrice}</div> : null}

                        {isShowCourse ? <div className={css.contentCostText}>{infoBuy.buttonText}</div> : null}
                        {isShowManual ? <div className={css.contentCostText}>{infoBuy.buttonText}</div> : null}

                        {!isIdInManualIdList ? (
                            <div className={css.contentCostPrice}>
                                <div className={css.contentCostPriceManual}>
                                    {isShowManual && manual.data ? (
                                        <span className={css.contentCostText}>Стоимость методички</span>
                                    ) : null}
                                    {isShowManual && manual.data ? <span>{manual.data.cost}₽ </span> : null}
                                </div>
                            </div>
                        ) : null}
                        {isShowBook ? <div className={css.contentCostPrice}>{infoBuy.price} ₽</div> : null}
                        {isShowCourse ? <div className={css.contentCostPrice}>{`${infoBuy.price} ₽`}</div> : null}
                    </div>
                </button>
            ) : null}

            {(infoBuy.id !== '5' && !isIdInCourseIdList) || !isIdInManualIdList ? (
                <Link
                    to={{
                        pathname: `/delivery/${id}`,
                        search: `price=${isShowCourse ? infoBuy.price : isShowManual ? infoBuy.cost : ''}&delivery=${
                            isShowCourse ? 'course' : isShowManual ? 'manual' : null
                        }`,
                    }}
                    className={css.contentPriceButton}
                >
                    <div className={css.contentPriceLink}>
                        {isShowManual && !isIdInManualIdList ? (
                            <div className={css.contentPriceText}>Купить методичку</div>
                        ) : null}

                        {isShowCourse ? <div className={css.contentPriceText}>{infoBuy.buttonBuy}</div> : null}
                        {isShowBook ? <div className={css.contentPriceText}>{infoBuy.buttonBuy}</div> : null}
                    </div>
                </Link>
            ) : null}

            {infoBuy.book && <PDFViewer pdfUrl="https://content-water.plutus-fin.ru/books/book_1.pdf" />}
        </div>
    );
};
