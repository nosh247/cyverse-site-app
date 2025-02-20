import { FC, useRef } from "react";
import {Button, ButtonsWrapper} from "./ButtonsWrapper.styles";
import { StoreViewModel } from "viewModels/StoreViewModel";
import mouseOverSrc from 'assets/sound/fx/mouseOver.mp3';

export const MainButtons: FC<{}> = () => {

    const audioRef = useRef(new Audio(mouseOverSrc));

    const playSound = () => {
        if (StoreViewModel.getIsAudioOn) {
            if (audioRef.current) {
                audioRef.current.volume = 0.75;
                audioRef.current.play();
            }
        }
    }
    const handleAirdropClick = () => {
        window.open('https://giv.gg/cyversetokenairdrop');
    }
    const handlePresaleClick = () => {
        window.open('https://presale.cyverse.io');
    }
    const handleWhitePaperClick = () => {
        window.open('https://bitblockz.gitbook.io/cyverse-whitepaper-en/welcome/cyverse');
    }

    return (
        <>

            <ButtonsWrapper>
                <Button onClick={handlePresaleClick} onMouseEnter={playSound} corner='left'>
                    <span>PLAY GAME</span>
                </Button>
                <Button onClick={handleWhitePaperClick} onMouseEnter={playSound} corner='right'>
                    <span>WHITE PAPER</span>
                </Button>
                <Button onClick={handleWhitePaperClick} onMouseEnter={playSound} corner='right'>
                    <span>CONTRACT AUDIT/KYC</span>
                </Button>
                <Button onClick={handleWhitePaperClick} onMouseEnter={playSound} corner='right'>
                    <span>CONTRACT ADDRESS</span>
                </Button>
            </ButtonsWrapper>
        </>

    )
}