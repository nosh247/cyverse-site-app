import { white } from "components/Variables";
import styled from "styled-components";

export const PartnersLogoContainer = styled.div`
    display: flex;
    width: 100%;
    backdrop-filter: blur(1.5px);
    background: linear-gradient(to top, rgba(0,0,0,0.9) 70%, rgba(0,0,0,1));
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5px 0;
    box-sizing: border-box;

    @media (min-width: 1080px){    
        padding: 20px 0;
        backdrop-filter: blur(3px);
        background: linear-gradient(to top, rgba(0,0,0,0.9) 70%, rgba(0,0,0,1));
    }
`

export const PartnerLogosWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    color: ${white};
    width: 100%;
    max-width: 100%;
    column-gap: 25px;
    box-sizing: border-box;

    @media screen and (min-width: 1080px){
        padding: 1rem;
        justify-content: center;
        flex-direction: row;
    }
`

export const PartnerLogoButton = styled.div<{ width?: number }>`
    position: relative;
    display: flex;    
    transition: all ease-in-out 150ms;
    cursor: pointer;
    width: ${(props) => props.width ? `${props.width}px` : '150px'};
    
    justify-content: center;
    align-items: center;
    flex-direction: row;
    margin-bottom: 14px;
    filter: drop-shadow(0px 0px 3px rgba(0,0,0,0.9));

    img {
        width: 100%;
        height: auto;
    }

    @media  (min-width: 1080px) {
        margin-bottom: initial;
        width: ${(props) => props.width ? `${props.width}px` : '150px'};
        max-width: none;
    }
`