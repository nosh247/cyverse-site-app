import { white } from "components/Variables";
import styled from "styled-components";

export const CopyrightWrapper = styled.div`
    font-size: 0.8rem;
    font-weight: 100;
    text-align: center;
    color: ${white};
    padding: 100px 0 10px;    
    position: relative;
    opacity: 0.75;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 24px;
    height: 250px;
    background: #1E272E;
`

export const CopyrightLogo = styled.span`
    width: 100px;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    img {
        width: 100px;
        height: 100px;
    }
`

export const CopyrightText = styled.span`
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 1rem;
    color: #B4B4B4;
    letter-spacing: 2.5px;
`