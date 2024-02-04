import { WaterTracker } from '@/pages/main/components/parts/WaterTracker';
import { useBackButton } from '@/utils/hooks/useBackButton';

const WaterTrackerPage = () => {
    useBackButton('/');

    return <WaterTracker />;
};

export default WaterTrackerPage;
