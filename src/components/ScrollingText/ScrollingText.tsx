import { FC } from "react";
import { ScrollingItems, ScrollingText, ScrollingTextHideOverflow, ScrollingTextWrapper } from "./ScrollingText.styles";

export const ScrollingTextContainer: FC<{}> = () => {
    return (
        <ScrollingTextHideOverflow>
            <ScrollingTextWrapper>
                <ScrollingText>
                    <ScrollingItems>COLLECT YOUR NFT DIVERS</ScrollingItems>
                    <ScrollingItems>|</ScrollingItems>
                    <ScrollingItems>EARN TOKENS</ScrollingItems>
                    <ScrollingItems>|</ScrollingItems>
                    <ScrollingItems>TRADE NFT ITEMS IN OUR MARKETPLACE</ScrollingItems>
                    <ScrollingItems>|</ScrollingItems>
                    <ScrollingItems>JOIN THE METAVERSE</ScrollingItems>
                    <ScrollingItems>|</ScrollingItems>
                    <ScrollingItems>BE A PART OF THE FUTURE IN GAMING</ScrollingItems>
                </ScrollingText>
            </ScrollingTextWrapper>
        </ScrollingTextHideOverflow>
    )
}