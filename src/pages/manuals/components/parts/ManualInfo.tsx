import React, { FC, ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { useMatch } from 'react-router-dom';

import { BonusInfoBuy } from '@/modules/bonus/BonusInfoBuy';
import { InfoBuy } from '@/modules/infoBuy/InfoBuy';
import PDFViewer from '@/modules/pdfViewer/PDFViewer';
import { useBackButton } from '@/utils/hooks/useBackButton';
import { AllManuals, AllManualsResponse } from '@/utils/types/manuals';

import css from './ManualInfo.module.scss';

export type ManualInfoProps = {
    children?: ReactNode;
    isShowBook?: boolean;
    isShowManual?: boolean;
};

export const ManualInfo: FC<ManualInfoProps> = () => {
    useBackButton('/manuals');
    const matchManual = useMatch('/manual/:id');
    const allManuals: AllManuals = useSelector((state: AllManualsResponse) => state.manuals);

    const id = Number(matchManual?.params.id);
    const manualInfo = allManuals.data.find((item) => +item.id === +id);

    return (
        <>
            <InfoBuy infoBuy={manualInfo} id={manualInfo?.id} isShowManual={true} />
            <div className={css.manualBonusInfo}>
                <BonusInfoBuy>Группа по всем вопросам в Telegram</BonusInfoBuy>
                <PDFViewer pdfUrl={manualInfo.url_file} />
            </div>
        </>
    );
};
