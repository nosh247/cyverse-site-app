import {FC} from "react";
import {ImageWrapper, RoadMapWrapper} from "./RoadMap.styles";
import byorgg from '../../assets/images/byorgg.png';

export const RoadMap: FC<{}> = () => {
    return (
        <RoadMapWrapper id='roadmap'>
            <ImageWrapper>
                <img src={byorgg} width='380px'/>
            </ImageWrapper>
        </RoadMapWrapper>
    )
}
