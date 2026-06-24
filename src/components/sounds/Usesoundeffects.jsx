import { useEffect, useRef } from "react";
import clickSoundFile from "../sounds/frog soung.mp3";
import hoverSoundFile from "../sounds/hover.mp3";

function useSoundEffects() {
  const clickSoundRef = useRef(null);
  const hoverSoundRef = useRef(null);
  const lastPlayedRef = useRef(0);
  const HOVER_DELAY = 80;

  useEffect(() => {
    const clickSound = clickSoundRef.current;
    const hoverSound = hoverSoundRef.current;

    if (!clickSound) {
      console.warn("clickSound element not found");
      return;
    }
    if (!hoverSound) {
      console.warn("hoverSound element not found");
      return;
    }

    clickSound.volume = 0.3;
    hoverSound.volume = 0.1;

    function playClick() {
      clickSound.currentTime = 0;
      clickSound.play().catch((err) => console.log("Click playback blocked:", err));
    }

    function playHover(e) {
      const el = e.target.closest("a, button");
      if (!el || el === e.relatedTarget) return;

      const now = Date.now();
      if (now - lastPlayedRef.current < HOVER_DELAY) return;
      lastPlayedRef.current = now;

      hoverSound.currentTime = 0;
      hoverSound.play().catch(() => {});
    }

    document.addEventListener("click", playClick);
    document.addEventListener("mouseover", playHover);

    return () => {
      document.removeEventListener("click", playClick);
      document.removeEventListener("mouseover", playHover);
    };
  }, []);

  return { clickSoundRef, hoverSoundRef };
}

export default function SoundEffects() {
  const { clickSoundRef, hoverSoundRef } = useSoundEffects();

  return (
    <>
      <audio ref={clickSoundRef} id="clickSound" src={clickSoundFile} preload="auto" />
      <audio ref={hoverSoundRef} id="hoverSound" src={hoverSoundFile} preload="auto" />
    </>
  );
}