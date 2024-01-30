import React, { FC, ReactNode } from 'react';
import { Link, useMatch } from 'react-router-dom';

import imageSrc from '../../../../assets/images/course/avatar.png';
import { ReactComponent as PlayIcon } from '../../../../assets/images/media/pause.svg';
import { InfoBuy } from '../../../../modules/infoBuy/InfoBuy';
import { useBackButton } from '../../../../utils/hooks/useBackButton';
import { ICourseCard } from '../../../../utils/types/courses';
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
            <InfoBuy infoBuy={card} isShowCourse={true}>
                <div className={css.coursesWrapper}>
                    {card?.lesson?.map((entry) => (
                        <div key={entry.id} className={css.courseInfoCard}>
                            <Link to={`/course/card/${entry.id}`} className={css.courseLink}>
                                <div>
                                    <img src={imageSrc} className={css.courseInfoIcon} alt="avatar" />
                                </div>
                                <div className={css.courseInfoText}>
                                    <div className={css.courseInfoDescription}>{entry?.description}</div>
                                    <div className={css.courseInfoTitle}>{entry?.title}</div>
                                </div>
                            </Link>
                            <div className={css.coursePlayIcon}>
                                <PlayIcon />
                            </div>
                        </div>
                    ))}
                </div>
            </InfoBuy>
        </>
    );
};
