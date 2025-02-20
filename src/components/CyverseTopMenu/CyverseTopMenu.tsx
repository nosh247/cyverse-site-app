import { MutableRefObject } from "react";
import { CyverseTopMenuWrapper } from "./CyverseTopMenu.styles";
import { TopMenuData, TopMenuDataType } from "./CyverseTopMenuData";

interface MenuProps {
    scrollTo: (ref: string) => void;
}

export const CyverseTopMenu = (props: MenuProps): JSX.Element => {
    return (
        <CyverseTopMenuWrapper>
            <ul>
                {TopMenuData.map((link: TopMenuDataType, i: number) => (
                    <li key={`topmenu_${i}`}>
                        <a href='#' onClick={() => props.scrollTo(link.url)}>{link.label}</a>
                    </li>
                ))}
            </ul>
        </CyverseTopMenuWrapper>
    )
}

