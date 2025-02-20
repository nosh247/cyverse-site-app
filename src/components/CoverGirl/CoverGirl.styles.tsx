import styled from "styled-components";

export const CoverGirlWrapper = styled.div`
    display: flex;
    text-align: center;     
    width: 100%;
`

export const FlickerImage = styled.img<{ size?: number, left?: number, top?: number, delay?:number }>`
    position: absolute;
    left: ${props => props.left ? props.left + '%' : '50%'};
    top: ${props => props.top ? props.top + '%' : '50%'};
    width: ${props => props.size && `${props.size}px`};
    height: ${props => props.size && `${props.size}px`};

    animation: flickerImageAnim 1s ease-in-out infinite alternate both;
    animation-delay: ${props => props.delay ? props.delay+'s' : '3s'};

    @keyframes flickerImageAnim {
        0%, 25%, 50%, 76%, 100% {
            opacity: 0.5;
        }
        1%, 24%, 49%, 75%, 95% {
            opacity: 1.5;
        }
        80% {
            opacity: 1;
        }
    }
`

export const UIImage = styled.img<{ size?: number }>`
    position: absolute;
    left: 50%;
    top: 0%;
    width: ${props => props.size && `${props.size}px`};
    height: ${props => props.size && `${props.size}px`};
    transform: translate(-50%, 0) rotate(0deg); 
    animation: spin 15s cubic-bezier(.8, 0, .2, 1) infinite;

    @keyframes spin {
        0% { transform: translate(-50%, 0) rotate(0deg); }
        50% { transform: translate(-50%, 0) rotate(180deg); }
        65% { transform: translate(-50%, 0) rotate(90deg); }
        100% { transform: translate(-50%, 0) rotate(360deg); }
    }
    
`