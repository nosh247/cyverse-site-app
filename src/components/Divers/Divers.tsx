import { FC } from "react";
import { Corners } from "components/Corners/Corners";
import {
    DiverFrame,
    DiverFrameWrapper,
    DiverName,
    DiversTextWrapper,
    DiversContainer,
    DiversWrapper,
    DiversButtonsWrapper
} from "./Divers.styles";
import cornerImgSrc from 'assets/images/corner-holder-frames.svg';
import { DiversData } from "./DiversData";
import {Button} from "../ButtonsWrapper/ButtonsWrapper.styles";

export const Divers: FC<{ url: string }> = ({ url }) => {
    const handlePresaleClick = () => {
        window.open(url);
    }
    const handleOpenBio = (bioURL: string) => {
        window.open(bioURL);
    }
    return (
        <DiversWrapper id='characters'>
            <DiversButtonsWrapper>
                <Button onClick={() => handlePresaleClick()} corner='left'>
                    <span>CY.VERSE LORE</span>
                </Button>
            </DiversButtonsWrapper>
            <DiversContainer>
                {
                    DiversData.map((d, i) => (
                        <DiverFrameWrapper onClick={() => handleOpenBio(d.bio)} key={`diver_${i}`} style={{ zIndex: DiversData.length - i }}>
                            <DiverFrame>
                                <img src={d.url} alt='Diver' />
                                <Corners type='LT' size={48} src={cornerImgSrc} />
                                <Corners type='RB' size={48} src={cornerImgSrc} />
                                <DiverName>{d.name}</DiverName>
                            </DiverFrame>
                        </DiverFrameWrapper>
                    ))
                }

            </DiversContainer>
            <DiversTextWrapper>
                GET TO KNOW EACH DIVER’S STORY!
            </DiversTextWrapper>
        </DiversWrapper>
    )
}