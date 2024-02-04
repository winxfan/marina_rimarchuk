import React, { FC } from 'react';
import { useMatch } from 'react-router-dom';

import { MediaPlayer } from '@/modules/media/MediaPlayer';
import { data } from '@/modules/meditationBlock/MeditationsBlock';
import { useBackButton } from '@/utils/hooks/useBackButton';

import css from './MediaMeditation.module.scss';

export type MediaMeditationProps = any;

export const MediaMeditation: FC<MediaMeditationProps> = () => {
    useBackButton('/');
    const matchMeditation = useMatch('/mediaMeditation/:id');

    const id = Number(matchMeditation?.params.id);
    const entryInfo = data.find((item) => +item.id === +id);

    return <MediaPlayer className={css.mediaMeditation} entryInfo={entryInfo} />;
};
