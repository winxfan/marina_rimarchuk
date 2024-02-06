import { ManualInfo } from '@/pages/manuals/components/parts/ManualInfo';
import { useBackButton } from '@/utils/hooks/useBackButton';

import css from './ManualInfoPage.module.scss';

const ManualInfoPage = () => {
    useBackButton('/');
    return (
        <div className={css.manualInfoPage}>
            <ManualInfo />
        </div>
    );
};

export default ManualInfoPage;
