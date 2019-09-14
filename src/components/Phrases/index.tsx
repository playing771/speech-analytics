import React, { useState } from 'react';
import { IPhrase } from '../../types';
import Words from './Words';
import './styles.css';

interface IProps {
  phrases: IPhrase[];
}

export default function Phrases({ phrases }: IProps) {
  return (
    <div className="phrases">
      {phrases.map(phrase => (
        <div className="phrases__item">
          <h1>{phrase.timeStart}</h1>
          <Words words={phrase.words} active={true}></Words>
        </div>
      ))}
    </div>
  );
}
