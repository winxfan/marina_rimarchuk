import React, { FC, ReactNode } from 'react';
import { useMatch } from 'react-router-dom';

import { BonusInfoBuy } from '../../../../modules/bonus/BonusInfoBuy';
import { InfoBuy } from '../../../../modules/infoBuy/InfoBuy';
import { useBackButton } from '../../../../utils/hooks/useBackButton';
import { dataManuals } from '../../ManualsPage';
import css from './ManualInfo.module.scss';

export type ManualInfoProps = {
    children?: ReactNode;
    isShowBook?: boolean;
    isShowManual?: boolean;
};

export const ManualInfo: FC<ManualInfoProps> = () => {
    useBackButton('/manuals');
    const matchManual = useMatch('/manual/:id');

    const id = Number(matchManual?.params.id);
    const manualInfo = dataManuals.find((item) => +item.id === +id);

    return (
        <>
            <InfoBuy infoBuy={manualInfo} isShowManual={true} />
            <div className={css.manualBonusInfo}>
                <BonusInfoBuy>Группа по всем вопросам в Telegram</BonusInfoBuy>
            </div>
        </>
    );
};
