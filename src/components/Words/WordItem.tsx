import React from 'react';
import { IWord } from '../../types';
import { observer } from 'mobx-react';

interface IProps {
  word: IWord;
}
const WordItem = observer(function WordItemCmp({ word: { active, word } }: IProps) {
  return <span className={`word ${active ? 'word--active' : ''}`}> {word}</span>;
});

export default WordItem;
