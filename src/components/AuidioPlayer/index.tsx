import React, { useEffect, useRef } from 'react';
import { useStore } from '../../stores/utils';
import { observer } from 'mobx-react';
import ProgressBar from './ProgressBar';
import PlayButton from './PlayButton';
import sample from '../../assets/sample.wav'

import './styles.css';



interface IProps {}

const AudioPlayer = observer(function AudioPlayer(props: IProps) {
  const playerRef = useRef<HTMLAudioElement>(null);

  const {
    paused,
    togglePlayer,
    setPlayer,
    updateTime,
    currentTimeFormatted,
    durationFormatted,
    endAudio,
  } = useStore();

  useEffect(() => {
    if (!playerRef.current) {
      console.warn('audio player doenst exists');
      return;
    }

    const player = playerRef.current;

    player.ontimeupdate = updateTime;
    player.oncanplay = () => {
      setPlayer(player);
    };
    player.onended = endAudio;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playerRef.current]);

  return (
    <div className="player-controls">
      <PlayButton paused={paused} clickHandle={togglePlayer}></PlayButton>
      <ProgressBar></ProgressBar>
      <span className="player-controls__time">{currentTimeFormatted}/</span>
      <span className="player-controls__time">{durationFormatted}</span>
      <audio ref={playerRef} src={sample}></audio>
    </div>
  );
});

export default AudioPlayer;
