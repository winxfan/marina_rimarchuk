import { ManualInfo } from '@/pages/manuals/components/parts/ManualInfo';
import { useBackButton } from '@/utils/hooks/useBackButton';

const ManualInfoPage = () => {
    useBackButton('/');
    return <ManualInfo />;
};

export default ManualInfoPage;
