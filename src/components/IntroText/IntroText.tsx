import { FC } from "react";
import { IntroTextWrapper } from "./IntroText.styles";

export const IntroText:FC<{}> = () =>{
    return(
        <IntroTextWrapper>
            <span>CY.VERSE is a cyberpunk inspired blockchain play-to-earn game on the Binance Smart Chain.<br/>Collect NFT divers and earn $CREDZ tokens with two different gameplays:</span>
        </IntroTextWrapper>
    );
}