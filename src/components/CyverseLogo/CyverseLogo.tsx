import { FC } from "react";
import { CyverseLogoWrapper } from "./CyverseLogo.styles";
import CyverseLogoSvg from 'assets/images/ui/cyverse-logo-top.svg';

export const CyverseLogo:FC<{}> = () => {
    return (
        <CyverseLogoWrapper width={920}>
            <img src={CyverseLogoSvg} alt='Welcome to cyverse'/>
        </CyverseLogoWrapper>
    )
}

