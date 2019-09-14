import React, { useEffect, useRef } from 'react';
import { useStore } from '../../stores/utils';
const soundFile = require('../../assets/sample.wav');
// import * as sample from '../../res/sample.wav';

interface IProps {}

export default function AudioPlayer(props: IProps) {
  const audioPlayerRef = useRef<HTMLAudioElement>(null);
  const { activateWord } = useStore();

  useEffect(() => {
    if (!audioPlayerRef.current) {
      console.warn('audio player doenst exists');
      return;
    }

    audioPlayerRef.current.ontimeupdate = event => {
      if (!audioPlayerRef.current) {
        console.warn('audio player doenst exists');
        return;
      }

      activateWord(audioPlayerRef.current.currentTime);
      // addWord();
      // console.log('update', tmp);
    };

    audioPlayerRef.current.onseeking = () => {};

    audioPlayerRef.current.onplay = () => {
      // test('PLAYING');
      // activateWord();
      // changeWord();
    };
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
  return (
    <div>
      <div>
        {/* {this.state.player === 'paused' && (
          <button onClick={() => this.setState({ player: 'playing' })}>Play</button>
        )}
        {this.state.player === 'playing' && (
          <button onClick={() => this.setState({ player: 'paused' })}>Pause</button>
        )}
        {this.state.player === 'playing' || this.state.player === 'paused' ? (
          <button onClick={() => this.setState({ player: 'stopped' })}>Stop</button>
        ) : (
          ''
        )} */}
        <audio ref={audioPlayerRef} src={soundFile}></audio>;
      </div>
    </div>
  );
}
