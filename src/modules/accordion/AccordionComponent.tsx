import React, { useState } from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

import { log } from 'node:util';

import { ReactComponent as ArrowDown } from '../../assets/images/arrowIcon/chevronDown.svg';
import { ReactComponent as ArrowUp } from '../../assets/images/arrowIcon/chevronUp.svg';
import css from './AccordionComponent.module.scss';

export type AccordionItem = {
    question: string;
    content: string;
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
    const [expandedItems, setExpandedItems] = useState<number[]>([]);

    const handleAccordionChange = (itemIndex: number) => {
        setExpandedItems((prevExpandedItems) => {
            if (prevExpandedItems.includes(itemIndex)) {
                return prevExpandedItems.filter((index) => index !== itemIndex);
            } else {
                return [...prevExpandedItems, itemIndex];
            }
        });
    };

    return (
        <Accordion allowZeroExpanded={true} className={css.accordion}>
            {accordionData.map((item, index) => (
                <AccordionItem key={index} className={css.accordionItem}>
                    <AccordionItemHeading className={css.accordionHeading}>
                        <AccordionItemButton
                            className={css.accordionButton}
                            onClick={() => handleAccordionChange(index)}
                        >
                            <div>{item.question}</div>
                            <div>{expandedItems.includes(index) ? <ArrowUp /> : <ArrowDown />}</div>
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
