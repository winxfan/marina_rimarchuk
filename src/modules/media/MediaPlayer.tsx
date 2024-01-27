import React, { FC, useEffect, useState } from 'react';
import { IconContext } from 'react-icons';
import { AiFillPauseCircle, AiFillPlayCircle } from 'react-icons/ai';

import useSound from 'use-sound';

import { ReactComponent as NextIcon } from '../../assets/images/media/next.svg';
import { ReactComponent as PrevIcon } from '../../assets/images/media/prev.svg';
import music from '../../assets/media/music.mp3';
import { IMedia } from '../../utils/types/media';
import css from './MediaPlayer.module.scss';

export type MediaPlayerProps = {
    entryInfo?: IMedia;
};

export const MediaPlayer: FC<MediaPlayerProps> = (props) => {
    const { entryInfo } = props;

    const [isPlaying, setIsPlaying] = useState(false);
    const [time, setTime] = useState({
        min: '',
        sec: '',
    });
    const [currTime, setCurrTime] = useState({
        min: '',
        sec: '',
    });

    const [seconds, setSeconds] = useState();

    const [play, { pause, duration, sound }] = useSound(music);

    useEffect(() => {
        if (duration) {
            const sec = duration / 1000;
            const min = Math.floor(Number(sec) / 60);
            const secRemain = Math.floor(sec % 60);
            setTime({
                min: `${min}`,
                sec: `${secRemain}`,
            });
        }
    }, [isPlaying, duration]);

    useEffect(() => {
        const interval = setInterval(() => {
            if (sound) {
                setSeconds(sound.seek([]));
                const min = Math.floor(sound.seek([]) / 60);
                const sec = Math.floor(sound.seek([]) % 60);
                setCurrTime({
                    min: `${min}`,
                    sec: `${sec}`,
                });
            }
        }, 1000);
        return () => clearInterval(interval);
    }, [sound]);

    const playingButton = () => {
        if (isPlaying) {
            pause();
            setIsPlaying(false);
        } else {
            play();
            setIsPlaying(true);
        }
    };

    return (
        <>
            <div className={css.mediaPlayer}>
                <div className={css.mediaImage}>{/*  <img src={entryInfo?.image} />*/}</div>
                <div className={css.mediaTitle}>
                    <div className={css.title}>{entryInfo?.title}</div>
                </div>
            </div>
            <div className={css.mediaDuration}>
                <input
                    type="range"
                    min="0"
                    max={Number(duration) / 1000}
                    defaultValue="0"
                    value={seconds}
                    className={css.timeline}
                    onChange={(e) => {
                        sound.seek([e.target.value]);
                    }}
                />
                <div className={css.time}>
                    <p>
                        {currTime.min}:{currTime.sec}
                    </p>
                    <p>
                        {time.min}:{time.sec}
                    </p>
                </div>

                <div className={css.controlsPlay}>
                    <button>
                        <div className={css.prevButton}>
                            <PrevIcon />
                        </div>
                    </button>
                    {!isPlaying ? (
                        <button className={css.playButton} onClick={playingButton}>
                            <IconContext.Provider value={{ size: '72px', color: '#4839BA' }}>
                                <AiFillPlayCircle />
                            </IconContext.Provider>
                        </button>
                    ) : (
                        <button className={css.playButton} onClick={playingButton}>
                            <IconContext.Provider value={{ size: '72px', color: '#4839BA' }}>
                                <AiFillPauseCircle />
                            </IconContext.Provider>
                        </button>
                    )}
                    <button>
                        <div className={css.nextButton}>
                            <NextIcon />
                        </div>
                    </button>
                </div>
            </div>
        </>
    );
};
