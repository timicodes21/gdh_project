import { useState, useEffect } from "react";

export const usePlayAudio = (text: string) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const playAudio = () => {
    setIsPlaying(true);
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  };

  const pauseAudio = () => {
    setIsPlaying(false);
    window.speechSynthesis.cancel();
  };

  return { playAudio, pauseAudio, isPlaying };
};

export const usePlayRecording = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const playRecording = () => setIsPlaying(true);
  const pauseRecording = () => setIsPlaying(false);

  return { isPlaying, setIsPlaying, playRecording, pauseRecording };
};
