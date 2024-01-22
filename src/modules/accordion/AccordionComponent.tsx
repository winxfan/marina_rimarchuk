import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemState,
} from 'react-accessible-accordion';

import { ReactComponent as ArrowDown } from '../../assets/images/arrowIcon/chevronDown.svg';
import { ReactComponent as ArrowUp } from '../../assets/images/arrowIcon/chevronUp.svg';
import css from './AccordionComponent.module.scss';

export type AccordionItem = {
    question: string;
    content: string;
};

type AccordionItemState = {
    expanded: boolean;
};

const accordionData: AccordionItem[] = [
    { question: 'Текст вопроса 1', content: '4 шага к исполнению мечты текст текст текст текст текст текст текст' },
    { question: 'Текст вопроса 2', content: '4 шага к исполнению мечты текст текст текст текст текст текст текст' },
    { question: 'Текст вопроса 3', content: '4 шага к исполнению мечты текст текст текст текст текст текст текст' },
    { question: 'Текст вопроса 4', content: '4 шага к исполнению мечты текст текст текст текст текст текст текст' },
    { question: 'Текст вопроса 5', content: '4 шага к исполнению мечты текст текст текст текст текст текст текст' },
    { question: 'Текст вопроса 6', content: '4 шага к исполнению мечты текст текст текст текст текст текст текст' },
    { question: 'Текст вопроса 7', content: '4 шага к исполнению мечты текст текст текст текст текст текст текст' },
];

export const AccordionComponent = () => {
    return (
        <Accordion allowZeroExpanded={true} className={css.accordion}>
            {accordionData.map((item, index) => (
                <AccordionItem key={index} className={css.accordionItem}>
                    <AccordionItemHeading className={css.accordionHeading}>
                        <AccordionItemButton className={css.accordionButton}>
                            <div>{item.question}</div>
                            <AccordionItemState>
                                {({ expanded }: AccordionItemState) => (expanded ? <ArrowUp /> : <ArrowDown />)}
                            </AccordionItemState>{' '}
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel className={css.accordionPanel}>
                        <p>{item.content}</p>
                    </AccordionItemPanel>
                </AccordionItem>
            ))}
        </Accordion>
    );
};
