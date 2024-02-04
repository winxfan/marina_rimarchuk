import React, { FC, ReactNode } from 'react';
import { Link, useMatch } from 'react-router-dom';

import cs from 'classnames';

import imageSrc from '@/assets/images/course/avatar.png';
import LockIcon from '@/assets/images/course/lock.svg';
import PlayIcon from '@/assets/images/course/play.svg';
import { InfoBuy } from '@/modules/infoBuy/InfoBuy';
import { useBackButton } from '@/utils/hooks/useBackButton';
import { ICourseCard } from '@/utils/types/courses';

import { dataCourses } from '../../CoursesPage';
import css from './CourseInfo.module.scss';

export type CourseInfoProps = {
    children?: ReactNode;
    isShowBook?: boolean;
    isShowManual?: boolean;
};

export const CourseInfo: FC<CourseInfoProps> = () => {
    useBackButton('/courses');
    const matchCard = useMatch('/course/card/:id');

    const id = Number(matchCard?.params.id);

    const card: ICourseCard | undefined = dataCourses.flatMap((course) => course.card).find((item) => +item.id === id);

    return (
        <>
            <InfoBuy infoBuy={card} isShowCourse={true} id={id}>
                <div className={css.coursesWrapper}>
                    {card?.lesson?.map((entry) => (
                        <Link
                            key={entry.id}
                            to={`/course/card/${id}/show/${entry.id}`}
                            className={cs(css.courseInfoCard, !entry.open ? css.courseCardBlock : '')}
                            onClick={(e) => {
                                if (!entry.open) {
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
                            <div className={css.coursePlayIcon}>{entry.open ? <PlayIcon /> : <LockIcon />}</div>
                        </Link>
                    ))}
                </div>
            </InfoBuy>
        </>
    );
};
