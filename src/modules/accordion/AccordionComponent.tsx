import React, { FC } from 'react';
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
import { AccordionItemState as AccordionState } from './types';

export type AccordionComponentProps = {
    data: any[];
    isTasksPage?: boolean;
};

export const AccordionComponent: FC<AccordionComponentProps> = (props) => {
    const { data, isTasksPage } = props;

    return (
        <Accordion allowZeroExpanded={true} className={css.accordion}>
            {data?.map((item, index) => (
                <AccordionItem key={index} className={css.accordionItem}>
                    <AccordionItemHeading className={css.accordionHeading}>
                        <AccordionItemButton className={css.accordionButton}>
                            {isTasksPage ? (
                                <div className={css.accordionTasksWrapper}>
                                    <div className={css.accordionTasksIcon}></div>
                                    <div className={css.accordionTasksTitle}>{item.title}</div>
                                </div>
                            ) : (
                                <div>{item.title}</div>
                            )}
                            <AccordionItemState>
                                {({ expanded }: AccordionState) => (expanded ? <ArrowUp /> : <ArrowDown />)}
                            </AccordionItemState>{' '}
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel className={css.accordionPanel}>
                        <p>{item.contentOne}</p>
                    </AccordionItemPanel>
                    <AccordionItemPanel className={css.accordionPanel}>
                        <p>{item.contentTwo}</p>
                    </AccordionItemPanel>
                </AccordionItem>
            ))}
        </Accordion>
    );
};
