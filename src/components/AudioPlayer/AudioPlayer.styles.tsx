import styled from "styled-components";

export const AudioPlayerWrapper = styled.div<{ isOn?: boolean }>`
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 18px;
    height: 18px;
    top: 15px;
    right: 8px;
    cursor: pointer;
    opacity: 0.65;
    transition: all ease-in-out 150ms;
    text-align: center;
    color: #fff;
    
    &:hover {
        opacity: 1;
    }

    img {
        opacity: ${(props) => props.isOn ? '1' : '0.5'};
        display: block;
        width: 100%;
        height: 100%;
        filter: drop-shadow(0px 0px 5px rgba(255,255,255,0.9));
        transition: all ease-in-out 150ms;
    }

    span {
        font-size: 0.8rem;
        opacity: ${(props) => props.isOn ? '1' : '0.5'};
        filter: drop-shadow(0px 0px 5px rgba(255,255,255,0.9)); 
        transition: all ease-in-out 150ms;
        display: none;
    }

    @media (min-width: 1080px){
        width: 32px;
        height: 32px;
        top: 20px;
        right: 20px;

        span {
            display: flex;
        }
    }
`