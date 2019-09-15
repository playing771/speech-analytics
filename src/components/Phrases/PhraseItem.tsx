import React from 'react';
import PersonIcon from './PersonIcon';
import { IPhrase } from '../../types';
import Words from '../Words';
import { observer } from 'mobx-react-lite';
import { formatTime } from '../../stores/utils';

interface IProps {
  phrase: IPhrase;
}

const PhraseItem = observer(function PhraseItemCmp({ phrase }: IProps) {
  return (
    <div className="phrase-item">
      <div className="phrase-item__left">
        <div className="phrase-item__person">
          <PersonIcon></PersonIcon>
        </div>
      </div>
      <div className="phrase-item__right">
        <div className="phrase-item__content">
          <span className="phrase-item__content-time">{formatTime(phrase.timeStart)}</span>
          <Words words={phrase.words}></Words>
        </div>
      </div>
    </div>
  );
});

export default PhraseItem;
