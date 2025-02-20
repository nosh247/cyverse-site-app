import {
    TrailerWrapper,
    YoutubeContainer,
    YoutubePlayer
} from "./Trailer.styles";

export const Trailer = (): JSX.Element => {
    return (
        <TrailerWrapper id='trailer'>
            <YoutubeContainer>
                <YoutubePlayer
                    id="ytplayer"
                    width="300"
                    height="260"
                    frameBorder="0"
                    src="https://www.youtube.com/embed/_LOLpyY03pQ?autoplay=0&origin=https://cyverse.io&rel=0"
                />
            </YoutubeContainer>
        </TrailerWrapper>
    )
}