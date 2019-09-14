import React from 'react';
import { IWord } from '../../../types';
import './styles.css';

interface IProps {
  words: IWord[];
  active: boolean;
}

export default function Words({ words, active }: IProps) {
  return (
    <div>
      {words.map(word => (
        <span className={`word ${active ? 'word--active' : ''}`}> {word.word}</span>
      ))}
    </div>
  );
}
