import css from './Main.module.scss';
import { AffirmationDay } from './components/AffirmationDay';
import { MeditationsBlock } from './components/MeditationsBlock';
import { WaterTracker } from './components/WaterTracker';

export const MainPage = () => {
    return (
        <div className={css.container}>
            <AffirmationDay />
            <WaterTracker />
            <MeditationsBlock />
        </div>
    );
};
