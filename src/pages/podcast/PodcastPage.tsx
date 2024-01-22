import React, { FC } from 'react';

import { HeaderPage } from '../../modules/header/components/HeaderPage';
import { PodcastCard } from '../main/components/parts/PodcastCard';
import css from './PodcastPage.module.scss';

export type PodcastPageProps = {
    isPage?: boolean;
};

export const PodcastPage: FC<PodcastPageProps> = (props) => {
    const { isPage } = props;

    return (
        <div className={css.podcastPage}>
            <HeaderPage title="Подкасты" />
            <div className={css.podcastWrapper}>
                <PodcastCard
                    isPage={isPage}
                    className={css.podcastOneBack}
                    title="Практика намерения, которая перевернет жизнь!"
                />
                <PodcastCard
                    isPage={isPage}
                    className={css.podcastTwoBack}
                    title="Я НЕ Г*ВНО или как ощутить свою ценность"
                />
                <PodcastCard
                    isPage={isPage}
                    className={css.podcastOneBack}
                    title="Практика намерения, которая перевернет жизнь!"
                />
                <PodcastCard
                    isPage={isPage}
                    className={css.podcastTwoBack}
                    title="Я НЕ Г*ВНО или как ощутить свою ценность"
                />
            </div>
        </div>
    );
};
