import styled from "styled-components";
import baseButtonSrc from 'assets/images/ui/button-base.svg';
import baseButtonPinkSrc from 'assets/images/ui/button-base-pink.svg';
import baseButtonBigSrc from 'assets/images/ui/button-big-base.svg';
import baseButtonBigHoverSrc from 'assets/images/ui/button-big-base-hover.svg';


import {
    white,
    textBlue,
    blue, buttonColor
} from "components/Variables";

export const cornerBottomLeft = '4px 10px 4px 10px';

export const cornerBottomRight = '10px 4px 10px 4px';

type variant = 'normal' | 'alt';

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  button {
    transform: scale(0.8);  
  }

  @media (min-width: 1025px) {
    align-items: stretch;
    justify-content: center;
    flex-direction: row;
  }
`

export const PreSaleButtonsWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  position: absolute;
  bottom: -20px;
  align-items: stretch;
  flex-direction: row;
  height: 55px;
  z-index: 999;  
  
  button {
    transform: scale(1.2);  
  }
`


export const Button = styled.button<{ corner?: string, disabled?: boolean, variant?: variant }>`
  cursor: pointer;
  border: none;
  background-color: transparent;
  background-image: ${props => props.variant === 'alt' ? `url(${baseButtonPinkSrc})` : `url(${baseButtonSrc})`};
  background-repeat: no-repeat;
  background-size: contain;
  width: 248px;
  color: ${props => props.variant === 'alt' ? white : buttonColor};
  line-height: 55px;
  position: relative;
  transition: all ease-in-out 150ms;
  
  &:disabled {
    pointer-events: none;
    opacity: 0.5;
  }

  span {
    font-size: 1.1rem;
    transition: all ease-in-out 150ms;
    font-weight: bold;
  }

  &:hover {
    animation: flickerButton 150ms ease-in-out forwards;

    span {
      color: ${white};
      opacity: 1.4 !important;
    }
  }

  @keyframes flickerButton {
    0%, 25%, 50%, 76%, 100% {
      opacity: 1;
      width: 235px;
    }
    1%, 24%, 49%, 75%, 95% {
      opacity: 0;
      width: 248px;
    }
    80% {
      opacity: 1;
      width: 235px;
    }
    100% {
      opacity: 1;
      width: 248px;
    }
  }
`
export const ButtonBig = styled.button<{ corner?: string, disabled?: boolean, variant?: variant }>`
  cursor: pointer;
  border: none;
  background-color: transparent;
  background-image: ${props => props.variant === 'alt' ? `url(${baseButtonBigSrc})` : `url(${baseButtonBigSrc})`};
  background-repeat: no-repeat;
  background-size: contain;
  width: 248px;
  color: ${props => props.variant === 'alt' ? white : buttonColor};
  position: relative;
  transition: all ease-in-out 150ms;
  display: flex;
  justify-content: center;
  align-items: center;
  
  
  &:disabled {
    pointer-events: none;
    opacity: 0.5;
  }

  span {
    font-size: 1.25rem;
    transition: all ease-in-out 150ms;
    font-weight: bold;
    text-align: center;
  }

  &:hover {
    animation: flickerButton 150ms ease-in-out forwards;
    background-image: ${props => props.variant === 'alt' ? `url(${baseButtonBigHoverSrc})` : `url(${baseButtonBigHoverSrc})`};

    span {
      color: ${white};
    }
  }

  @keyframes flickerButton {
    0%, 25%, 50%, 76%, 100% {
      opacity: 1;
      width: 235px;
    }
    1%, 24%, 49%, 75%, 95% {
      opacity: 0;
      width: 248px;
    }
    80% {
      opacity: 1;
      width: 235px;
    }
    100% {
      opacity: 1;
      width: 248px;
    }
  }
`

export const Alert = styled.span`
  position: absolute;
  top: 100%;
  letter-spacing: 1.5px;
  width: 100%;
  height: auto;
  left: 0;
  line-height: initial !important;
  padding: 5px !important;
  font-size: 11px !important;

  @media (min-width: 1080px) {
    letter-spacing: 2.3px;
    font-size: 14px !important;
  }
`
export const CriticalText = styled.span`
  top: 0;
  left: 0;
  position: fixed;
  width: 100%;
  display: block;
  font-size: 0.85rem;
  color: white;
  padding: 8px;
  margin: 0;
  text-align: center;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(4px);
  border-radius: 4px;
  filter: drop-shadow(0 0 2px #f00) drop-shadow(-1px -1px 2px #f00) drop-shadow(1px 1px 2px #f00);
  pointer-events: none;
  box-sizing: border-box;
  z-index: 4;

  @media (max-width: 1024px) {
    top: initial;
    bottom: 0;
    font-size: 0.75rem;
  }

`