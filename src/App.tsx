import React from 'react';

import AudioPlayer from './components/AuidioPlayer';
import Phrases from './components/Phrases';
import { StoreProvider } from './stores/utils';
import Card from './components/Card';
import './styles.css';

const App: React.FC = () => {
  return (
    <StoreProvider>
      <div className="main-container">
        <Card className="phrases-card" title="Пример звонка.wav" subTitle="21 мар 18:03:41">
          <Phrases></Phrases>
        </Card>
        <Card className="audio-player-card">
          <AudioPlayer></AudioPlayer>
        </Card>
      </div>
    </StoreProvider>
  );
};

export default App;
