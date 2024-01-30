import React, { FC } from 'react';

import { HeaderPage } from '../../modules/header/components/HeaderPage';
import { Menu } from '../../modules/menu/Menu';
import { useBackButton } from '../../utils/hooks/useBackButton';
import { IManuals } from '../../utils/types/manuals';
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

export const ManualsPage: FC<ManualsPageProps> = () => {
    useBackButton('/');

    return (
        <div className={css.manualsPage}>
            <HeaderPage title="Методички" />
            <div className={css.manualsWrapper}>
                {dataManuals?.map((item) => (
                    <ManualCard key={item.id} {...item} />
                ))}
            </div>
            <Menu />
        </div>
    );
};
