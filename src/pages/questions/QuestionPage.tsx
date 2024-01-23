import React from 'react';

import { AccordionComponent } from '../../modules/accordion/AccordionComponent';
import { AccordionItem } from '../../modules/accordion/types';
import { HeaderPage } from '../../modules/header/components/HeaderPage';
import css from './QuestionPage.module.scss';

export const QuestionPage = () => {
    const questionData: AccordionItem[] = [
        { title: 'Текст вопроса 1', contentOne: '4 шага к исполнению мечты текст текст текст текст текст текст текст' },
        { title: 'Текст вопроса 2', contentOne: '4 шага к исполнению мечты текст текст текст текст текст текст текст' },
        { title: 'Текст вопроса 3', contentOne: '4 шага к исполнению мечты текст текст текст текст текст текст текст' },
        { title: 'Текст вопроса 4', contentOne: '4 шага к исполнению мечты текст текст текст текст текст текст текст' },
        { title: 'Текст вопроса 5', contentOne: '4 шага к исполнению мечты текст текст текст текст текст текст текст' },
        { title: 'Текст вопроса 6', contentOne: '4 шага к исполнению мечты текст текст текст текст текст текст текст' },
        { title: 'Текст вопроса 7', contentOne: '4 шага к исполнению мечты текст текст текст текст текст текст текст' },
    ];

    return (
        <div className={css.questionPage}>
            <HeaderPage title="Ответы на вопросы" />
            <div className={css.questionWrapper}>
                <AccordionComponent data={questionData} />
            </div>
        </div>
    );
};
