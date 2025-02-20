import { secondaryColor, white } from "components/Variables";
import styled from "styled-components";

export const SocialButtonsWrapper = styled.div`
    display: flex;    
    flex-direction: column;    
    align-items: flex-start;
    color: ${white};
    width: 100%;
    gap: 50px;
    padding: 40px;
    box-sizing: border-box;
    position: sticky;
`

export const SocialButton = styled.div<{ endRotation?: number }>`
    position: relative;
    display: flex;
    width: 24px;
    height: 24px;
    opacity: 1;
    transition: all ease-in-out 150ms;
    cursor: pointer; 

    img {
        transform: ${(props) => props.endRotation ? `rotate(${props.endRotation}deg)` : `rotate(185deg)`};
    }
    
    @media (min-width: 1080px) {
        svg {
            width: 24px;
            height: 24px;
            transition: 150ms all ease-in-out;
            g {
                transition: 150ms all ease-in-out;
            }
        }

        &:hover {
            img {
                opacity:1;
                animation: spinFlicker 250ms forwards ease-in-out;
            }
            svg {
                transform: scale(1.1);
                g {
                    fill: ${white};
                }
            }
        }
    }


    @keyframes spinFlicker {
        0% {
            opacity: 0;
            transform: rotate(0deg);
        }
        50%{
            opacity: 0.7;
            transform: rotate(0deg);
        }
        51%{
            opacity: 0.80;
            transform: rotate(200deg);
        }
        52%{
            opacity: 0.2;
            transform: rotate(0deg);
        }
        100% {
            opacity: 0.7;
            transform: ${(props) => props.endRotation ? `rotate(${props.endRotation}deg)` : `rotate(185deg)`};
        }
    }
`

export const SocialMediaMessage = styled.div`
    margin-top:100px;
    margin-bottom: 20px;
    display: flex;
    text-align: center;
    font-size: 1.5rem;
    font-weight: 900;
    color: ${white};
    text-shadow: 0px 0px 8px ${white};
    user-select: none;
`