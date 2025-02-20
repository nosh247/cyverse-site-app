import styled from "styled-components";
import accordionHeader from 'assets/images/ui/accordion-header-base.png';
import accordionFooter from 'assets/images/ui/accordion-footer-base.png';

import {accordionBlue} from "../Variables";


export const AccordionWrapper = styled.div<{ isOn?: boolean }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 50px;
  opacity: ${(props) => props.isOn ? 1 : 0.5};
  margin: 10px 0;
  cursor: pointer;

  &:hover {
    animation: ${(props) => !props.isOn ? 'flickerOpacity 150ms ease-in-out forwards' : null}
  }

  @keyframes flickerOpacity {
    0%, 25%, 50%, 76%, 100% {
      opacity: 1;
    }
    1%, 24%, 49%, 75%, 95% {
      opacity: 0;
    }
    80% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
`
export const AccordionHeader = styled.div<{ isOn?: boolean }>`
  display: flex;
  width: 100%;
  min-height: 60px;
  background-image: url(${accordionHeader});
  background-repeat: no-repeat;
  background-size: contain;
  align-items: center;
  color: ${accordionBlue};
  z-index: 2;

  span {
    font-family: "Roboto", sans-serif;
    letter-spacing: 0.261em;
    transition: all ease-in-out 150ms;
    display: block;
    margin-left: 200px;
    margin-top: -20px;

    @media (min-width: 1025px) {
      font-size: 1.25rem;
      margin-top: 0;
    }
  }

  @media (min-width: 1025px) {
    background-size: cover;
  }

`
export const AccordionFooter = styled.div<{ isOn?: boolean }>`
  display: flex;
  width: 100%;
  min-height: 50px;
  background-image: url(${accordionFooter});
  background-repeat: no-repeat;
  background-size: contain;
  align-items: center;
  z-index: 2;
  margin-top: -32px;
  
  @media (min-width: 1025px) {
    margin-top: -20px;
  }

`
export const AccordionContent = styled.div<{ isOn?: boolean }>`
  width: 100%;
  overflow: hidden;
  height: 0;
  margin: ${(props) => props.isOn ? '-22px 0 -10px' : 0};
  min-height: ${(props) => props.isOn ? '600px' : 0};
  opacity: ${(props) => props.isOn ? 1 : 0};
  transition: min-height 250ms ease-in-out, opacity 50ms ease-in-out 150ms, margin 250ms ease-in-out;
`