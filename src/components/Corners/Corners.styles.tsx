import styled from "styled-components";

const defaultWidth: string = '32px';

export const ConerWrapperLT = styled.div<{ size?: number }>`
    position: absolute;
    top: -1px;
    left: -1px;
    width: ${(props) => props.size ? `${props.size}px` : defaultWidth};
    height: ${(props) => props.size ? `${props.size}px` : defaultWidth};
`
export const ConerWrapperLB = styled.div<{ size?: number }>`
    position: absolute;
    bottom: -1px;
    left: -1px;
    width: ${(props) => props.size ? `${props.size}px` : defaultWidth};
    height: ${(props) => props.size ? `${props.size}px` : defaultWidth};
    transform: rotate(-90deg);
`

export const ConerWrapperRT = styled.div<{ size?: number }>`
    position: absolute;
    top: -1px;
    right: -1px;
    width: ${(props) => props.size ? `${props.size}px` : defaultWidth};
    height: ${(props) => props.size ? `${props.size}px` : defaultWidth};
    transform: scale(-1) rotate(270deg);
`

export const ConerWrapperRB = styled.div<{ size?: number }>`
    position: absolute;
    bottom: -1px;
    right: -1px;
    width: ${(props) => props.size ? `${props.size}px` : defaultWidth};
    height: ${(props) => props.size ? `${props.size}px` : defaultWidth};
    transform: scale(-1) rotate(0deg);

`