import React, { createContext, ReactElement, useContext } from 'react';
import { IAudioPlayerStore, AudioPlayerStore } from './audioPlayerStore';
import { useLocalStore } from 'mobx-react';

const storeContext = createContext<IAudioPlayerStore | null>(null);

export const StoreProvider = ({ children }: { children: ReactElement | ReactElement[] }) => {
  const store = useLocalStore(AudioPlayerStore);
  return <storeContext.Provider value={store}>{children}</storeContext.Provider>;
};

export const useStore = () => {
  const store = useContext(storeContext);
  if (!store) {
    throw new Error('StoreProvider is missing');
  }
  return store;
};

export function formatTime(time: number) {
  if (!isNaN(time)) {
    return Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2);
  }
}
