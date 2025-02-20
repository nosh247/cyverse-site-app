import styled, { css } from "styled-components";
import readMapBackgroundMap from 'assets/images/read-map-backbround-map.svg';


export const RoadMapWrapper = styled.div<{ isOn?: boolean }>`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 600px;
    background-image: url(${readMapBackgroundMap});
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
`

export const ImageWrapper = styled.div<{ isOn?: boolean }>`
    position: absolute;
    bottom: 0;
    right: 0;
`