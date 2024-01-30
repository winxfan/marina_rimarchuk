import React, { FC, ReactNode } from 'react';
import { Link, useMatch } from 'react-router-dom';

import srcImage from '../../../../assets/images/course/avatarLesson.png';
import { ReactComponent as NextLesson } from '../../../../assets/images/course/next.svg';
import { useBackButton } from '../../../../utils/hooks/useBackButton';
import { ICourseCard } from '../../../../utils/types/courses';
import { dataCourses } from '../../CoursesPage';
import css from './CourseShowInfo.module.scss';

export type CourseShowInfoProps = {
    children?: ReactNode;
    isShowBook?: boolean;
    isShowManual?: boolean;
};

export const CourseShowInfo: FC<CourseShowInfoProps> = () => {
    useBackButton('/courses');
    const matchShowCourse = useMatch('/course/card/:id/show/:id');
    let cardId: number;
    const id = Number(matchShowCourse?.params.id);

    console.log(matchShowCourse, 'matchShowCourse');
    const match = matchShowCourse?.pathname.match(/\/course\/card\/(\d+)\/show\/(\d+)/);

    if (match) {
        cardId = Number(match[1]);
    }

    const card: ICourseCard | undefined = dataCourses
        .flatMap((course) => course.card)
        .find((entry) => +entry.id === +cardId);

    const lesson: ICourseCard | undefined = card?.lesson?.find((entry) => +entry.id === id);

    console.log(card, 'card');
    return (
        <div className={css.courseShowInfo}>
            <div className={css.courseShowDescription}>{lesson?.description}</div>
            <div className={css.courseShowTitle}>{lesson?.title}</div>
            <img className={css.courseShowImage} src={srcImage} alt="Course show" />
            <Link to={`/course/card/${match ? Number(match[1]) : null}/show/${id + 1}`} className={css.nextLesson}>
                <div className={css.courseShowText}>
                    <p>Следующий урок</p>
                </div>
                <div className={css.courseShowIcon}>
                    <NextLesson />
                </div>
            </Link>
        </div>
    );
};
