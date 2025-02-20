import { Button } from "components/ButtonsWrapper/ButtonsWrapper.styles";
import { FC } from "react";
import {NewsCreatesWrapper, NewsImageWrapper, NewsWrapper} from "./News.styles";
import byorgg from '../../assets/images/news_character.png';
import creates from '../../assets/images/news_creates.svg';
import nftButton from '../../assets/images/genesis_nft.svg';




export const News: FC<{ url: string }> = ({ url }) => {
    const handlePresaleClick = () => {
        window.open('https://presale.cyverse.io');
    }
    return (
        <NewsWrapper id='news'>
            <NewsImageWrapper>
                <img src={byorgg} width={445}/>
            </NewsImageWrapper>
            <NewsCreatesWrapper>
                <img src={creates} width={355}/>
            </NewsCreatesWrapper>
            <Button variant="alt" onClick={handlePresaleClick} corner='left'>
                <img src={nftButton} width={160}/>
            </Button>
        </NewsWrapper>
    )
}