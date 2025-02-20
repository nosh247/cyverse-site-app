import { CyverseTokenWrapper } from './CyverseToken.styles';
import CyverseTokenSrc from 'assets/images/token.png';

export const CyverseToken = ():JSX.Element => {
    return (
        <CyverseTokenWrapper>
            <img src={CyverseTokenSrc} alt='Cyverse Token' /> 
        </CyverseTokenWrapper>
    )

}