import React from 'react';

import { AccordionComponent } from '../../modules/accordion/AccordionComponent';
import { HeaderPage } from '../../modules/header/components/HeaderPage';
import { useBackButton } from '../../utils/hooks/useBackButton';
import { IAccordionContent } from '../../utils/types/statistic';
import css from './QuestionPage.module.scss';

const questionData: IAccordionContent[] = [
    {
        id: '1',
        title: 'Текст вопроса 1',
        content: [
            {
                title: '4 шага к исполнению мечты текст текст текст текст текст текст текст',
            },
        ],
    },
    {
        id: '2',
        title: 'Текст вопроса 1',
        content: [
            {
                title: '4 шага к исполнению мечты текст текст текст текст текст текст текст',
            },
        ],
    },
    {
        id: '3',
        title: 'Текст вопроса 1',
        content: [
            {
                title: '4 шага к исполнению мечты текст текст текст текст текст текст текст',
            },
        ],
    },
    {
        id: '4',
        title: 'Текст вопроса 1',
        content: [
            {
                title: '4 шага к исполнению мечты текст текст текст текст текст текст текст',
            },
        ],
    },
    {
        id: '5',
        title: 'Текст вопроса 1',
        content: [
            {
                title: '4 шага к исполнению мечты текст текст текст текст текст текст текст',
            },
        ],
    },
    {
        id: '6',
        title: 'Текст вопроса 1',
        content: [
            {
                title: '4 шага к исполнению мечты текст текст текст текст текст текст текст',
            },
        ],
    },
];

export const QuestionPage = () => {
    useBackButton('/');

    return (
        <div className={css.questionPage}>
            <HeaderPage title="Ответы на вопросы" />
            <div className={css.questionWrapper}>
                <AccordionComponent data={questionData} />
            </div>
        </div>
    );
};
