import React from 'react';

import './App.css';
import AudioPlayer from './components/AuidioPlayer';
import Phrases from './components/Phrases';
import { transcript } from './assets/transcript';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>TEST</h1>
      <Phrases phrases={transcript}></Phrases>
      <AudioPlayer></AudioPlayer>
    </div>
  );
};

export default App;
