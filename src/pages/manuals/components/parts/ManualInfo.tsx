import React, { FC, ReactNode, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useMatch } from 'react-router-dom';

import Cookies from 'js-cookie';

import { BonusInfoBuy } from '@/modules/bonus/BonusInfoBuy';
import { InfoBuy } from '@/modules/infoBuy/InfoBuy';
import PDFViewer from '@/modules/pdfViewer/PDFViewer';
import { getCheckPay } from '@/store/checkPaySlice';
import { useBackButton } from '@/utils/hooks/useBackButton';
import { AllManuals, AllManualsResponse } from '@/utils/types/manuals';
import { GetCheckPayResponse } from '@/utils/types/pay';

import css from './ManualInfo.module.scss';

export type ManualInfoProps = {
    children?: ReactNode;
    isShowBook?: boolean;
    isShowManual?: boolean;
};

export const ManualInfo: FC<ManualInfoProps> = () => {
    useBackButton('/manuals');
    const [manualIdList, setManualIdList] = useState([]);
    const [isIdInManualIdList, setIsIdInManualIdList] = useState(false);
    const matchManual = useMatch('/manual/:id');
    const allManuals: AllManuals = useSelector((state: AllManualsResponse) => state.manuals);

    const id = Number(matchManual?.params.id);
    const manualInfo = allManuals.data.find((item) => +item.id === +id);

    console.log(id, 'ManualInfo');

    const manualsId = useSelector((state: GetCheckPayResponse) => state.checkPay.data.manuals_id);

    useEffect(() => {
        if (manualsId) {
            setManualIdList(manualsId);
            console.log(manualsId, 'manualsId ManualInfo');
        }
    }, [manualsId]);

    useEffect(() => {
        if (manualIdList?.includes(id)) {
            console.log(isIdInManualIdList, 'isIdInManualIdList 333');
            setIsIdInManualIdList(true);
        } else {
            setIsIdInManualIdList(false);
        }
    }, [id, manualIdList]);

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
