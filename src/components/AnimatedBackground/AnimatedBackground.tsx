import { FC, useEffect, useRef } from "react";
import { AnimatedBackgroundWrapper } from "./AnimatedBackground.styles";
import { CoverGirlWrapper, FlickerImage, UIImage } from "components/CoverGirl/CoverGirl.styles";
import { PixiComponent } from "components/PixiComponent/functionalPixiComponent";
import {ButtonBig, PreSaleButtonsWrapper} from "../ButtonsWrapper/ButtonsWrapper.styles";
import homeNftButtonLabel from "../../assets/images/home_nft_button_label.png";


export const AnimatedBackground: FC<{}> = () => {
    const backgroundRef = useRef<HTMLDivElement | null>(null);
    const coverGirlRef = useRef<HTMLDivElement | null>(null);
    const uiRef = useRef<HTMLImageElement | null>(null);
    const flickerRef = useRef<HTMLImageElement | null>(null);
    const flickerRef2 = useRef<HTMLImageElement | null>(null);

    const handlePresaleClick = () => {
        window.open('https://presale.cyverse.io');
    }

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            e.preventDefault();
            if (window.innerWidth >= 1080) {
                if (backgroundRef.current) {
                    let depth = `${50 - (e.pageX - window.innerWidth / 2) * 0.01}% ${50 - (e.pageY - window.innerHeight / 2) * 0.01}%`
                    backgroundRef.current.style.backgroundPosition = depth;
                }
                if (coverGirlRef.current) {
                    let depth = `${(e.pageX - window.innerWidth / 2) * -0.003}%, ${(e.pageY - window.innerHeight / 2) * -0.001}%`;
                    coverGirlRef.current.style.transform = `translate(${depth})`;
                }
                if (uiRef.current) {
                    let leftPos = `${50 - (e.pageX - window.innerWidth / 2) * -0.002}%`;
                    let topPos = `${-15 - (e.pageY - window.innerHeight / 2) * -0.0052}%`;
                    uiRef.current.style.left = leftPos;
                    uiRef.current.style.top = topPos;
                }
                if (flickerRef.current) {
                    let leftPos = `${60 - (e.pageX - window.innerWidth / 2) * -0.002}%`;
                    let topPos = `${60 - (e.pageY - window.innerHeight / 2) * -0.0052}%`;
                    flickerRef.current.style.left = leftPos;
                    flickerRef.current.style.top = topPos;
                }
            } else {
                if (coverGirlRef.current) {
                    coverGirlRef.current.style.transform = `translate(0, 0)`;
                }
            }

        }
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <>
            <AnimatedBackgroundWrapper ref={backgroundRef} size={125}>
                <CoverGirlWrapper ref={coverGirlRef}>
                    <PixiComponent  />
                </CoverGirlWrapper>
                <UIImage ref={uiRef} src='/images/ui-front-1.webp' size={1280} />
                <FlickerImage ref={flickerRef} src='/images/ui-flickering-details.webp' alt='flickering fx' />
                <FlickerImage ref={flickerRef2} src='/images/ui-flickering-details.webp' top={25} left={30} delay={10} alt='flickering fx' />
            </AnimatedBackgroundWrapper>
            <PreSaleButtonsWrapper>
                <ButtonBig onClick={handlePresaleClick} corner='left'>
                    <img src={homeNftButtonLabel} width={150}/>
                </ButtonBig>
            </PreSaleButtonsWrapper>
        </>

    )
}
