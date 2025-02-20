import styled, { css } from "styled-components";
import tokenomicsBackground from 'assets/images/tokenomics_background.svg';


export const TokenomicsWrapper = styled.div<{ isOn?: boolean }>`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 620px;
    background-image: url(${tokenomicsBackground});
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
`

export const ImageWrapper = styled.div<{ isOn?: boolean }>`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-55%,-40%); 
    
    img {
        animation: flicker 150ms ease-in-out infinite forwards, rotate 15000ms ease-in-out infinite forwards;  
    }
    
    @keyframes flicker {
        0%, 25%, 50%, 76%, 100% {
            opacity: 1;
        }
        1%, 24%, 49%, 75%, 95% {
            opacity: 0.9;
        }
        80% {
            opacity: 0.8;
        }
        100% {
            opacity: 1;
        }
    }
    
    @keyframes rotate {
       0% {
          transform: rotateY(0);
       }
       40% {
          transform: translateZ(50px) rotateY(170deg);
       }
       50% {
          transform: translateZ(50px) rotateY(190deg) scale(1);
       }
       80% {
          transform: rotateY(360deg) scale(.95);
       }
       100% {
          transform: scale(1);
       }
        
}
    
`