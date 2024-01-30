import React, { FC } from 'react';

import avatarLesson from '../../assets/images/course/avatar.png';
import brainImage from '../../assets/images/courses/brain.png';
import meditationImage from '../../assets/images/courses/meditation.png';
import moneyImage from '../../assets/images/courses/money.png';
import { HeaderPage } from '../../modules/header/components/HeaderPage';
import { Menu } from '../../modules/menu/Menu';
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
                price: '7 777 ₽',
                image: meditationImage,
                buttonText: 'Стоимость курса',
                buttonBuy: 'Купить курс',
                lesson: [
                    {
                        id: '11',
                        image: avatarLesson,
                        title: 'Как найти себя. Лучшая практика',
                        description: 'Урок 1',
                        open: true,
                    },
                    {
                        id: '12',
                        image: avatarLesson,
                        title: 'Как найти себя. Лучшая практика',
                        description: 'Урок 2',
                        open: false,
                    },
                    {
                        id: '13',
                        image: avatarLesson,
                        title: 'Как найти себя. Лучшая практика',
                        description: 'Урок 3',
                        open: false,
                    },
                    {
                        id: '14',
                        image: avatarLesson,
                        title: 'Как найти себя. Лучшая практика',
                        description: 'Урок 4',
                        open: false,
                    },
                ],
                contentInfo: (
                    <div>
                        <p className={css.courseTextPage}>Денежное мышление и маркетинг.</p>
                        Здесь я поделюсь опытом кратного роста дохода. Расскажу, как лично тебе сделать результат в
                        кратчайший промежуток времени.Как не зависеть ни от кого и растить себя, свою личность
                        успешно!👇
                    </div>
                ),
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
                price: '7 777 ₽',
                buttonText: 'Стоимость курса',
                buttonBuy: 'Купить курс',
                image: brainImage,
                contentInfo: (
                    <div>
                        <p className={css.courseTextPage}>Денежное мышление и маркетинг.</p>
                        Здесь я поделюсь опытом кратного роста дохода. Расскажу, как лично тебе сделать результат в
                        кратчайший промежуток времени.Как не зависеть ни от кого и растить себя, свою личность
                        успешно!👇
                    </div>
                ),
                id: '6',
                lesson: [
                    {
                        id: '15',
                        image: avatarLesson,
                        title: 'Как найти себя. Лучшая практика',
                        description: 'Урок 1',
                        open: true,
                    },
                    {
                        id: '16',
                        image: avatarLesson,
                        title: 'Как найти себя. Лучшая практика',
                        description: 'Урок 2',
                        open: false,
                    },
                    {
                        id: '17',
                        image: avatarLesson,
                        title: 'Как найти себя. Лучшая практика',
                        description: 'Урок 3',
                        open: false,
                    },
                    {
                        id: '18',
                        image: avatarLesson,
                        title: 'Как найти себя. Лучшая практика',
                        description: 'Урок 4',
                        open: false,
                    },
                ],
            },
            {
                title: 'Как раскрыть потенциал и запустить денежный поток',
                description: 'Уроков: 4',
                price: '7 777 ₽',
                buttonText: 'Стоимость курса',
                image: moneyImage,
                buttonBuy: 'Купить курс',
                contentInfo: (
                    <div>
                        <p className={css.courseTextPage}>Денежное мышление и маркетинг.</p>
                        Здесь я поделюсь опытом кратного роста дохода. Расскажу, как лично тебе сделать результат в
                        кратчайший промежуток времени.Как не зависеть ни от кого и растить себя, свою личность
                        успешно!👇
                    </div>
                ),
                id: '7',
                lesson: [
                    {
                        id: '19',
                        image: avatarLesson,
                        title: 'Как найти себя. Лучшая практика',
                        description: 'Урок 1',
                        open: true,
                    },
                    {
                        id: '20',
                        image: avatarLesson,
                        title: 'Как найти себя. Лучшая практика',
                        description: 'Урок 2',
                        open: false,
                    },
                    {
                        id: '21',
                        image: avatarLesson,
                        title: 'Как найти себя. Лучшая практика',
                        description: 'Урок 3',
                        open: false,
                    },
                    {
                        id: '22',
                        image: avatarLesson,
                        title: 'Как найти себя. Лучшая практика',
                        description: 'Урок 4',
                        open: false,
                    },
                ],
            },
            {
                title: 'Мышление изобильного человека',
                description: 'Уроков: 6',
                price: '7 777 ₽',
                buttonText: 'Стоимость курса',
                image: meditationImage,
                buttonBuy: 'Купить курс',
                contentInfo: (
                    <div>
                        <p className={css.courseTextPage}>Денежное мышление и маркетинг.</p>
                        Здесь я поделюсь опытом кратного роста дохода. Расскажу, как лично тебе сделать результат в
                        кратчайший промежуток времени.Как не зависеть ни от кого и растить себя, свою личность
                        успешно!👇
                    </div>
                ),
                id: '8',
                lesson: [
                    {
                        id: '23',
                        image: '',
                        title: 'Как найти себя. Лучшая практика',
                        description: 'Урок 1',
                        open: true,
                    },
                    {
                        id: '24',
                        image: '',
                        title: 'Как найти себя. Лучшая практика',
                        description: 'Урок 2',
                        open: false,
                    },
                    {
                        id: '25',
                        image: '',
                        title: 'Как найти себя. Лучшая практика',
                        description: 'Урок 3',
                        open: false,
                    },
                    {
                        id: '26',
                        image: '',
                        title: 'Как найти себя. Лучшая практика',
                        description: 'Урок 4',
                        open: false,
                    },
                ],
            },
        ],
    },
];

export const CoursesPage: FC<CoursesPageProps> = () => {
    useBackButton('/');

    return (
        <div className={css.coursesPage}>
            <HeaderPage title="Курсы" />
            <div className={css.coursesWrapper}>
                {dataCourses?.map((item) => (
                    <CoursesCard key={item.id} course={item} />
                ))}
            </div>
            <Menu />
        </div>
    );
};
