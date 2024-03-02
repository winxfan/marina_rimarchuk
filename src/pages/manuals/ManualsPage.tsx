import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ThunkDispatch } from '@reduxjs/toolkit';

import { HeaderPage } from '@/modules/header/components/HeaderPage';
import { Menu } from '@/modules/menu/Menu';
import { getManualsAll } from '@/store/manualsSlice';
import { useBackButton } from '@/utils/hooks/useBackButton';
import { AllManuals, AllManualsResponse, IManuals } from '@/utils/types/manuals';

import css from './ManualsPage.module.scss';
import { ManualCard } from './components/parts/ManualCard';

export type ManualsPageProps = {
    isPage?: boolean;
};

export const dataManuals: IManuals[] = [
    {
        id: '1',
        title: 'С чего начать оздоровление тела взрослого и ребенка?',
        description: 'миомы, мастопатии, кисты, сбой гормонов, климакс',
        price: '990 ₽',
        buttonText: 'Стоимость методички',
        buttonBuy: 'Купить методичку',
    },
    {
        id: '2',
        title: 'Лечение при орви взрослых и детей без лекарств «Аптечка без лекарств»',
        description:
            'схемы лечения кашля, насморка, температуры, бронхита, астмы, пневмонии и др проблем по здоровью у детей и взрослых',
        price: '990 ₽',
        buttonText: 'Стоимость методички',
        buttonBuy: 'Купить методичку',
    },
    {
        id: '3',
        title: 'С чего начать оздоровление тела взрослого и ребенка?',
        description: 'миомы, мастопатии, кисты, сбой гормонов, климакс',
        price: '990 ₽',
        buttonText: 'Стоимость методички',
        buttonBuy: 'Купить методичку',
        buy: true,
    },
    {
        id: '4',
        title: 'Лечение при орви взрослых и детей без лекарств «Аптечка без лекарств»',
        description:
            'схемы лечения кашля, насморка, температуры, бронхита, астмы, пневмонии и др проблем по здоровью у детей и взрослых',
        buy: true,
        price: '990 ₽',
        buttonText: 'Стоимость методички',
        buttonBuy: 'Купить методичку',
    },
    {
        id: '5',
        title: 'С чего начать оздоровление тела взрослого и ребенка?',
        description: 'миомы, мастопатии, кисты, сбой гормонов, климакс',
        buy: true,
        price: '990 ₽',
        buttonText: 'Стоимость методички',
        buttonBuy: 'Купить методичку',
    },
    {
        id: '6',
        title: 'Лечение при орви взрослых и детей без лекарств «Аптечка без лекарств»',
        description:
            'схемы лечения кашля, насморка, температуры, бронхита, астмы, пневмонии и др проблем по здоровью у детей и взрослых',
        buy: true,
        price: '990 ₽',
        buttonText: 'Стоимость методички',
        buttonBuy: 'Купить методичку',
    },
    {
        id: '7',
        title: 'Лечение при орви взрослых и детей без лекарств «Аптечка без лекарств»',
        description:
            'схемы лечения кашля, насморка, температуры, бронхита, астмы, пневмонии и др проблем по здоровью у детей и взрослых',
        buy: true,
        price: '990 ₽',
        buttonText: 'Стоимость методички',
        buttonBuy: 'Купить методичку',
    },
];

const ManualsPage: FC<ManualsPageProps> = () => {
    useBackButton('/');

    const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

    const allManuals: AllManuals = useSelector((state: AllManualsResponse) => state.manuals);

    useEffect(() => {
        const fetchManualsAll = async () => {
            await dispatch(getManualsAll());
        };

        fetchManualsAll();
    }, []);

    return (
        <div className={css.manualsPage}>
            <HeaderPage title="Методички" />
            <div className={css.manualsWrapper}>
                {allManuals.data ? allManuals.data?.map((item) => <ManualCard key={item.id} {...item} />) : null}
            </div>
            <Menu />
        </div>
    );
};

export default ManualsPage;
