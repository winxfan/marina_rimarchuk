import { CommonHeader } from '../../../modules/header/components/CommonHeader';
import CardSlider from '../../../modules/slider/CardSlider';
import css from './MeditationsBlock.module.scss';

export const MeditationsBlock = () => {
    return (
        <div className={css.meditationsBlock}>
            <CommonHeader title="Медитации" />
            <CardSlider />
        </div>
    );
};
