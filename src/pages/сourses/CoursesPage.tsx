import React, { FC } from 'react';

import { HeaderPage } from '../../modules/header/components/HeaderPage';
import { useBackButton } from '../../utils/hooks/useBackButton';
import { ICourses } from '../../utils/types/courses';
import css from './CoursesPage.module.scss';
import { CoursesCard } from './component/parts/CoursesCard';

export type CoursesPageProps = {
    isPage?: boolean;
};

export const dataCourses: ICourses[] = [
    {
        id: '1',
        title: 'Бесплатные курсы',
        card: [
            {
                title: 'Тело - храм. Как правильно эксплуатировать свое тело',
                description: 'Уроков: 6',
                id: '5',
            },
        ],
    },
    {
        id: '2',
        title: 'Авторские курсы',
        card: [
            {
                title: 'Мышление изобильного человека',
                description: 'Уроков: 5',
                id: '6',
            },
            {
                title: 'Как раскрыть потенциал и запустить денежный поток',
                description: 'Уроков: 4',
                id: '7',
            },
            {
                title: 'Мышление изобильного человека',
                description: 'Уроков: 6',
                id: '8',
            },
        ],
    },
];

export const CoursesPage: FC<CoursesPageProps> = () => {
    useBackButton('/');

    return (
        <div className={css.manualsPage}>
            <HeaderPage title="Курсы" />
            <div className={css.manualsWrapper}>
                {dataCourses?.map((item) => (
                    <CoursesCard key={item.id} course={item} />
                ))}
            </div>
        </div>
    );
};
