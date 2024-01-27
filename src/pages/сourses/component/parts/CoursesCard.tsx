import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as ArrowRight } from '../../../../assets/images/courses/arrowRight.svg';
import { ICourses } from '../../../../utils/types/courses';
import css from './CoursesCard.module.scss';

export type CoursesCardProps = {
    course: ICourses;
};

export const CoursesCard: FC<CoursesCardProps> = (props) => {
    const { course } = props;

    const { card, title } = course;

    return (
        <div className={css.coursesWrapper}>
            <div className={css.coursesTitle}>{title}</div>
            {card?.map((entry, index) => (
                <div key={entry.id} className={css.courseCard}>
                    <Link to="/" className={css.courseLink}>
                        <div className={css.courseIcon} data-index={index}></div>
                        <div className={css.courseText}>
                            <div className={css.title}>{entry?.title}</div>
                            <div className={css.description}>{entry?.description}</div>
                        </div>
                    </Link>
                    <div className={css.courseIcon}>
                        <ArrowRight />
                    </div>
                </div>
            ))}
        </div>
    );
};
