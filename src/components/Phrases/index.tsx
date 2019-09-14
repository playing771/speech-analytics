import React, { useState, useEffect } from 'react';
import { IPhrase } from '../../types';
import Words from './Words';
import './styles.css';
import { observer } from 'mobx-react';
import { reaction } from 'mobx';
import { useStore } from '../../stores/utils';

interface IProps {}

const Phrases = observer(function PhrasesCmp() {
  const { phrases } = useStore();

  return (
    <div className="phrases">
      {phrases.map((phrase, index) => {
        return (
          <div className="phrases__item" key={index}>
            <h1>{phrase.timeStart}</h1>
            <Words words={phrase.words}></Words>
          </div>
        );
      })}
    </div>
  );
});

export default Phrases;
