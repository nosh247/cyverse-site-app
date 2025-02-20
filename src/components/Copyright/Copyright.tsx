import {useMemo} from "react";
import { CopyrightLogo, CopyrightText, CopyrightWrapper } from "./Copyright.styles";
import cyverseLogoFlatSrc from 'assets/images/cyverse-coin-flat-white.svg';

export const Copyright = ():JSX.Element => {
    const getDate = useMemo(() => {
        return new Date().getFullYear()
    }, []);

    return (
        <CopyrightWrapper>
            <CopyrightLogo>
                <img src={cyverseLogoFlatSrc} alt='CYVERSE' />
            </CopyrightLogo>
            <CopyrightText>© {getDate} CY.VERSE. All rights reserved. Powered by BITBLOCKZ</CopyrightText>
        </CopyrightWrapper>
    )
}