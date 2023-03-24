import { useState, useEffect } from "react";

export const usePlayAudio = (text: string) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [notPlayed, setNotPlayed] = useState(true);
  const msg = new SpeechSynthesisUtterance();
  msg.text = text;

  console.log("isPlaying", isPlaying);

  // useEffect(() => {
  // if (isPlaying) {
  //   window.speechSynthesis.speak(msg);
  // } else {
  //   window.speechSynthesis.pause();
  // }
  // }, [isPlaying]);

  const playAudio = () => {
    // isPlaying
    //   ? window.speechSynthesis.resume()
    //   : window.speechSynthesis.speak(msg);
    window.speechSynthesis.speak(msg);
    // setIsPlaying(true);
  };

  const pauseAudio = () => {
    // setIsPlaying(false);
    // window.speechSynthesis.pause();
  };

  return { playAudio, pauseAudio, isPlaying };
};
