import { FC } from "react";
import { TitleWrapper } from "./TitleText.styles";

export type TitleTextProps = {
    value: string;
}

export const TitleText: FC<TitleTextProps> = ({
    value,
}) => {
    return (
        <TitleWrapper>{value}</TitleWrapper>
    )
}