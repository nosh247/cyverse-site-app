import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
} from "react";

import DragonBonesScene from "assets/dragonbones/DragonBonesScene.js";
import skeleton from "assets/dragonbones/resource/parallaxCove_ske.json";
import texJson from "assets/dragonbones/resource/parallaxCove_tex.json";
//import texPng from "assets/dragonbones/resource/parallaxCove_tex.png";

import {
  PixiCanvas,
  PixiCanvasWrapper,
} from "components/PixicanvasWrapper/PixiCanvas.styles";

export const PixiComponent =(props) => {
  const [pixiHandler, setPixiHandler] = useState([]);
  const [isReady, setIsReady] = useState(false);

  let gameCanvas = useRef(null);

  const resizeRenderer = useCallback(() => {
    if (isReady)
      pixiHandler.resizeRenderer(window.innerWidth, window.innerHeight);
  }, [pixiHandler, isReady]);

  useEffect(() => {
    if (!isReady && gameCanvas.current) {
      setPixiHandler(
        new DragonBonesScene(gameCanvas.current, skeleton, texJson, '/images/parallaxCove_tex.webp')
      );
    }
    setIsReady(true);
    window.addEventListener("resize", resizeRenderer);

    if (isReady) {
      pixiHandler.playAnimation(props.animation);
    }

    return () => window.removeEventListener("resize", resizeRenderer);
  }, [isReady, props.animation, pixiHandler, resizeRenderer]);

  let height = window.innerHeight;

  return (
    <PixiCanvasWrapper>
      <PixiCanvas ref={gameCanvas} height={height} />
    </PixiCanvasWrapper>
  );
};
