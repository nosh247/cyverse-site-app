import { FC } from "react"
import { FrontPageContainerWrapper } from "./FrontPageContainer.styles"

type Props = {
    children?: JSX.Element | JSX.Element[],
}

export const FrontPageContainer: FC<Props> = ({
    children,
}: Props) => {
    return (
        <FrontPageContainerWrapper>
            {children}
        </FrontPageContainerWrapper>
    )
}