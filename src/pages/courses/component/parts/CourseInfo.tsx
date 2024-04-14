import React, { FC, ReactNode, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useMatch } from 'react-router-dom';

import { ThunkDispatch } from '@reduxjs/toolkit';
import cs from 'classnames';
import Cookies from 'js-cookie';

import imageSrc from '@/assets/images/course/avatar.png';
import LockIcon from '@/assets/images/course/lock.svg';
import PlayIcon from '@/assets/images/course/play.svg';
import { InfoBuy } from '@/modules/infoBuy/InfoBuy';
import { getCheckPay } from '@/store/checkPaySlice';
import { useBackButton } from '@/utils/hooks/useBackButton';
import { ICourseCard } from '@/utils/types/courses';
import { DataCheckPay, GetCheckPay } from '@/utils/types/pay';

import { dataCourses } from '../../CoursesPage';
import css from './CourseInfo.module.scss';

export type CourseInfoProps = {
    children?: ReactNode;
    isShowBook?: boolean;
    isShowManual?: boolean;
};

export const CourseInfo: FC<CourseInfoProps> = () => {
    useBackButton('/courses');
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
    const matchCard = useMatch('/course/card/:id');
    const [courseIdList, setCourseIdList] = useState([]);
    const [isIdInCourseIdList, setIsIdInCourseIdList] = useState(false);

    const id = Number(matchCard?.params.id);

    useEffect(() => {
        const fetchCheckPay = async () => {
            const apiToken = localStorage.getItem('api_token');
            console.log(id, 'id11');
            Cookies.set('api_token', apiToken);
            await dispatch(getCheckPay());
        };

        fetchCheckPay();
    }, [id, dispatch]);

    const card: ICourseCard | undefined = dataCourses.flatMap((course) => course.card).find((item) => +item.id === id);
    console.log(matchCard, 'matchCard');

    const course_id = useSelector((state: GetCheckPay) => state.course_id);

    console.log(course_id, 'course_id33333');

    useEffect(() => {
        setCourseIdList(course_id);

        console.log(courseIdList, 'courseIdList3333');
    }, [course_id]);

    useEffect(() => {
        if (courseIdList?.includes(id)) {
            console.log(isIdInCourseIdList, 'isIdInCourseIdList333');
            setIsIdInCourseIdList(true);
        } else {
            setIsIdInCourseIdList(false);
        }
    }, [id, courseIdList]);

    return (
        <>
            <InfoBuy infoBuy={card} isShowCourse={true} id={id}>
                <div className={css.coursesWrapper}>
                    {card?.lesson?.map((entry) => (
                        <Link
                            key={entry.id}
                            to={`/course/card/${id}/show/${entry.id}`}
                            className={cs(css.courseInfoCard, !isIdInCourseIdList ? css.courseCardBlock : '')}
                            onClick={(e) => {
                                if (!isIdInCourseIdList) {
                                    e.preventDefault();
                                }
                            }}
                        >
                            <div>
                                <img src={imageSrc} className={css.courseInfoIcon} alt="avatar" />
                            </div>
                            <div className={css.courseInfoText}>
                                <div className={css.courseInfoDescription}>{entry?.description}</div>
                                <div className={css.courseInfoTitle}>{entry?.title}</div>
                            </div>
                            <div className={css.coursePlayIcon}>{isIdInCourseIdList ? <PlayIcon /> : <LockIcon />}</div>
                        </Link>
                    ))}
                </div>
            </InfoBuy>
        </>
    );
};
