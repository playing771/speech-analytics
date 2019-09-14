import React from 'react';
import { IWord } from '../../../types';
import './styles.css';
import WordItem from './WordItem';
import { observer, useObserver } from 'mobx-react';
import { spawn } from 'child_process';

interface IProps {
  words: IWord[];
}

const Words = observer(function WordsCmp({ words }: IProps) {
  return (
    <div>
      {words.map((word, index) => {
        return <WordItem word={word} key={index}></WordItem>;
      })}
    </div>
  );
});

export default Words;
