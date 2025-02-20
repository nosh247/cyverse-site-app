import { FC } from "react"
import { PartnerLogoButton, PartnerLogosWrapper, PartnersLogoContainer } from "./PartnerLogos.styles";
import unityLogoSrc from 'assets/images/unityLogoWhite.svg';
import bscLogoSrc from 'assets/images/bscLogo.svg';
import pancakeLogoSrc from 'assets/images/pancakeSwapLogoWhite.svg';
import pinkSaleSrc from 'assets/images/pinkSale.png';
import tokenSrc from 'assets/images/token.png';
import useWindowSize from 'utils/useWindowSize';

export const PartnerLogos: FC<{}> = () => {

    const handleClick = (link: string) => {
        window.open(link);
    }

    const { width } = useWindowSize();

    const partnersList = [
        {
            name: 'unity',
            url: 'https://unity.com/',
            icon: unityLogoSrc,
            width: width <= 768 ? 100 : 150
        },
        {
            name: 'binance smart chain',
            url: 'https://binance.com/',
            icon: bscLogoSrc,
            width: width <= 768 ? 100 : 150
        },
        {
            name: 'pancake swap',
            url: 'https://pancakeswap.finance/',
            icon: pancakeLogoSrc,
            width: width <= 768 ? 150 : 200
        },
        {
            name: 'pink sale',
            url: 'https://www.pinksale.finance/',
            icon: pinkSaleSrc,
            width: width <= 768 ? 100 : 150
        }
    ]

    return (
        <PartnersLogoContainer>
            <PartnerLogosWrapper>
                {partnersList.map((b, i) => <PartnerLogoButton
                    key={i}
                    width={b.width}
                    onClick={() => handleClick(b.url)}>
                    <img src={b.icon} alt={b.name} />
                </PartnerLogoButton>)}
            </PartnerLogosWrapper>
        </PartnersLogoContainer>
    );
}