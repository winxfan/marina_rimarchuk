import React, { FC, ReactNode } from 'react';
import { Link, useMatch } from 'react-router-dom';

import cs from 'classnames';

import NextLesson from '@/assets/images/course/next.svg';
import VideoPlayer from '@/modules/media/VideoPlayer';
import { useBackButton } from '@/utils/hooks/useBackButton';
import { ICourseCard } from '@/utils/types/courses';

import { dataCourses } from '../../CoursesPage';
import css from './CourseShowInfo.module.scss';

export type CourseShowInfoProps = {
    children?: ReactNode;
    isShowBook?: boolean;
    isShowManual?: boolean;
};

export const CourseShowInfo: FC<CourseShowInfoProps> = () => {
    const matchShowCourse = useMatch('/course/card/:id/show/:id');
    let cardId: number;
    const id = Number(matchShowCourse?.params.id);

    console.log(matchShowCourse, 'matchShowCourse');
    const match = matchShowCourse?.pathname.match(/\/course\/card\/(\d+)\/show\/(\d+)/);

    if (match) {
        cardId = Number(match[1]);
    }

    useBackButton(`/course/card/${match ? Number(match[1]) : '/courses'}`);

    const card: ICourseCard | undefined = dataCourses
        .flatMap((course) => course.card)
        .find((entry) => +entry.id === +cardId);

    const lesson: ICourseCard | undefined = card?.lesson?.find((entry) => +entry.id === id);

    console.log(lesson, 'lesson');
    return (
        <div className={css.courseShowInfo}>
            <div className={css.courseShowDescription}>{lesson?.description}</div>
            <div className={css.courseShowTitle}>{lesson?.title}</div>
            <div className={cs(css.courseShowVideo)}>
                <VideoPlayer videoUrl={lesson.url} width={'360px'} height={'202px'} />
            </div>
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
