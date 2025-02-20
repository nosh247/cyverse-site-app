import { FC } from "react";
import { GameDetailsWrapper } from "./GameDetails.styles";
import { Accordion } from "../Accordion/Accordion";
import { RoadMap } from "../RoadMap/RoadMap";
import {Tokenomics} from "../Tokenomics/Tokenomics";


export const GameDetails: FC<{}> = () => {
    return (
        <GameDetailsWrapper id='game-details'>
            <Accordion title='ROADMAP_' open>
                <RoadMap />
            </Accordion>
            <Accordion title='TOKENOMICS_'>
                <Tokenomics />
            </Accordion>
        </GameDetailsWrapper>
    )
}