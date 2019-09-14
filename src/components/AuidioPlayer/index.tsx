import React, { useEffect, useRef } from 'react';
const soundFile = require('../../assets/sample.wav');
// import * as sample from '../../res/sample.wav';

interface IProps {}

export default function AudioPlayer(props: IProps) {
  const audioPlayerRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    console.log('audioPlayerRef', audioPlayerRef, audioPlayerRef.current);
    if (audioPlayerRef.current) {
      // audioPlayerRef.current.play();
      console.log('PLAYG');
      audioPlayerRef.current.ontimeupdate = tmp => {
        console.log('update', tmp);
      };
    }
  }, [audioPlayerRef.current]);

  // if (audioPlayerRef.current) {
  //   audioPlayerRef.current.play();
  //   audioPlayerRef.current.ontimeupdate = () => {
  //     console.log('update');
  //   };
  // }
  // const myaudio = new Audio(soundFile);
  // myaudio.play();
  // myaudio.loop = true;
  return <audio ref={audioPlayerRef} src={soundFile} controls={true} preload="none"></audio>;
}
