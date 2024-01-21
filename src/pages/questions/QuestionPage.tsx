import React from 'react';

import { AccordionComponent } from '../../modules/accordion/AccordionComponent';
import { HeaderPage } from '../../modules/header/components/HeaderPage';
import css from './QuestionPage.module.scss';

export const QuestionPage = () => {
    return (
        <div className={css.questionPage}>
            <HeaderPage title="Ответы на вопросы" />
            <div className={css.questionWrapper}>
                <AccordionComponent />
            </div>
        </div>
    );
};
