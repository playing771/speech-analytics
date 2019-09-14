import React from 'react';

import './App.css';
import AudioPlayer from './components/AuidioPlayer';
import { transcript } from './assets/transcript';
import Phrases from './components/Phrases';
import { StoreProvider } from './stores/utils';

const App: React.FC = () => {
  return (
    <StoreProvider>
      <div className="App">
        <h1>TEST</h1>
        <Phrases></Phrases>
        <AudioPlayer></AudioPlayer>
      </div>
    </StoreProvider>
  );
};

export default App;
