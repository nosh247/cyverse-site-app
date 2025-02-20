import React, { FC, useRef, useState } from "react";
import { AudioPlayerWrapper } from "./AudioPlayer.styles";
import speakerIconSrc from 'assets/images/speakerIcon.svg';
import speakerIconOffSrc from 'assets/images/speakerIconOff.svg';
import { StoreViewModel } from "viewModels/StoreViewModel";

export const AudioPlayer: FC<{}> = () => {

    const audioRef = useRef(new Audio('/music/main-ambient.webm'));
    const [audioOn, setAudioOn] = useState(false);

    const playAudio = (e: any): void => {
        e.preventDefault();
        e.stopPropagation();

        if (!audioOn) {
            audioRef.current.loop = true;
            audioRef.current.volume = 0.5;
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }

        setAudioOn(!audioOn);
        StoreViewModel.toggleAudio();
    }

    return (
        <AudioPlayerWrapper onClick={playAudio} isOn={audioOn}>
            <img src={audioOn ? speakerIconSrc : speakerIconOffSrc} alt='toggle sound' />
            <span>Audio</span>
        </AudioPlayerWrapper>
    )
}