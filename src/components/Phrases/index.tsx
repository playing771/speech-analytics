import React from 'react';
import Words from '../Words';
import './styles.css';
import { observer } from 'mobx-react';
import { useStore } from '../../stores/utils';
import PhraseItem from './PhraseItem';

const Phrases = observer(function PhrasesCmp() {
  const { phrases } = useStore();

  return (
    <div className="phrases">
      {phrases.map((phrase, index) => {
        return <PhraseItem key={index} phrase={phrase}></PhraseItem>;
      })}
    </div>
  );
});

export default Phrases;
