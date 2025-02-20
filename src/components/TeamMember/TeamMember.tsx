import { FC } from "react";
import {TeamMemberWrapper, NameWrapper, Name, LastName, JobPositionWrapper, ImageWrapper} from "./TeamMember.styles";
import {TeamMemberType} from "../Team/TeamData";


export const TeamMember: FC<TeamMemberType> = ({img, name, lastName, jobPosition}) => {
    return (
        <TeamMemberWrapper>
            <ImageWrapper>
                <img src={img} />
            </ImageWrapper>
            <NameWrapper>
                <Name>{name}</Name>
                <LastName>{lastName}</LastName>
            </NameWrapper>
            <JobPositionWrapper>
                <span>{jobPosition}</span>
            </JobPositionWrapper>
        </TeamMemberWrapper>
    )
}