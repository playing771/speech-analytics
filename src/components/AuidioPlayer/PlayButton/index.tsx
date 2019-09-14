import React from 'react';
import PlayIcon from './PlayIcon';
import PauseIcon from './PauseIcon';

import './styles.css';

interface IProps {
  paused: boolean;
  clickHandle: () => void;
}

export default function PlayButton({ paused, clickHandle }: IProps) {
  return (
    <button className="play-btn" onClick={clickHandle}>
      {paused ? <PlayIcon></PlayIcon> : <PauseIcon></PauseIcon>}
    </button>
  );
}
