import React, { MutableRefObject, useEffect, useRef, useState } from 'react';

import { AnimatedBackground } from 'components/AnimatedBackground/AnimatedBackground';
import { FrontPageContainer } from 'components/FrontPageContainer/FrontPageContainer';
import { CyverseLogo } from 'components/CyverseLogo/CyverseLogo';
import { MainButtons } from 'components/ButtonsWrapper/MainButtons';
import { SocialButtons } from 'components/SocialButtons/SocialButtons';
import { AudioPlayer } from 'components/AudioPlayer/AudioPlayer';
import { IntroText } from 'components/IntroText/IntroText';
import { Copyright } from 'components/Copyright/Copyright';
import { Trailer } from 'components/Trailer/Trailer';
import { News } from 'components/News/News';
import { Divers } from 'components/Divers/Divers';
import { GameDetails } from 'components/GameDetails/GameDetails';
import { Team } from "./components/Team/Team";
import { CyverseTopMenu } from "./components/CyverseTopMenu/CyverseTopMenu";

function App() {
  const [anchorTarget, setAnchorTarget] = useState<HTMLElement | null>(null);

  const scrollTo = (refName: string) => {
    let refNameClean = refName.toLowerCase().split('#').join('');
    setAnchorTarget(document.getElementById(refNameClean));
  }

  useEffect(() => {
    console.log('useEffect:', anchorTarget);
    if (anchorTarget)
      anchorTarget?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
  }, [anchorTarget])

  return (
    <div className="App">
      <AnimatedBackground />
      <FrontPageContainer>
        <CyverseTopMenu scrollTo={scrollTo} />
        <CyverseLogo />
        <SocialButtons />
        <AudioPlayer />
      </FrontPageContainer>
      <MainButtons />
      <IntroText />
      <News url='https://www.youtube.com' />
      <Trailer />
      <Divers url='https://presale.cyverse.io' />
      <GameDetails />
      <Team />
      <Copyright />
    </div>
  );
}

export default App;
