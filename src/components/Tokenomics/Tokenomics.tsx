import {FC} from "react";
import {TokenomicsWrapper, ImageWrapper } from "./Tokenomics.styles";
import tokenomicsCircle from '../../assets/images/tokenomics_circle.png';

export const Tokenomics: FC<{}> = () => {
    return (
        <TokenomicsWrapper id='tokenomics'>
            <ImageWrapper>
                <img src={tokenomicsCircle} width='380px' alt='tokenomics'/>
            </ImageWrapper>
        </TokenomicsWrapper>
    )
}
