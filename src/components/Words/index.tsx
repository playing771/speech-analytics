import React from 'react';
import { observer } from 'mobx-react';
import { IWord } from '../../types';
import WordItem from './WordItem';

import './styles.css';

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
