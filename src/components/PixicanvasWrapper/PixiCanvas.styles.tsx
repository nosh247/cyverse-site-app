import styled from "styled-components";

export const PixiCanvasWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    pointer-events: none;
`
export const PixiCanvas = styled.div<{height?:number}>`
    width: 100%;
    pointer-events: none;
    height: ${(props)=>props.height && `${props.height}`}
`