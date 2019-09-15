import { transcript as initialPhrases } from '../assets/transcript';
import { formatTime } from './utils';

type ILastActivePositon = { wordPosition: number; phrasePosition: number };

export function AudioPlayerStore() {
  let lastActivePosition: ILastActivePositon | undefined = undefined;
  let player: HTMLAudioElement;

  return {
    phrases: initialPhrases,
    paused: true,
    currentTime: 0,
    duration: 0,

    get currentPercentage() {
      return this.duration > 0 ? (this.currentTime / this.duration) * 100 : 0;
    },
    get phrasesCount() {
      return this.phrases.length;
    },
    get currentTimeFormatted() {
      return formatTime(this.currentTime);
    },
    get durationFormatted() {
      return formatTime(this.duration);
    },
    getPlayer() {
      return player;
    },

    scrollProgress(pageX: number, offsetWidth: number) {
      const currentTime = (pageX / offsetWidth) * this.duration;
      player.currentTime = currentTime;
    },

    updateTime() {
      const { currentTime } = player;
      this.currentTime = currentTime;
      this.activateWord(currentTime);
    },

    togglePlayer() {
      if (!player) {
        console.warn('cant find player');
        return;
      }
      if (this.paused) {
        player.play();
      } else {
        player.pause();
      }
      this.paused = !this.paused;
    },

    setPlayer(newPlayerRef: HTMLAudioElement) {
      player = newPlayerRef;
      this.duration = player.duration;
    },
    activateWord(currentTime: number) {
      const phraseIdx = this.phrases.findIndex(phrase => phrase.timeStart >= currentTime);

      const phrase =
        phraseIdx > -1
          ? phraseIdx > 0
            ? this.phrases[phraseIdx - 1]
            : this.phrases[0]
          : this.phrases[this.phrasesCount - 1];

      phrase.words.some((word, index) => {
        const toActivate = word.timeStart <= currentTime && currentTime <= word.timeEnd;

        if (lastActivePosition) {
          const word = this.phrases[lastActivePosition.phrasePosition].words[
            lastActivePosition.wordPosition
          ];
          word.active = false;
        }

        if (toActivate) {
          lastActivePosition = {
            wordPosition: index,
            phrasePosition: phraseIdx > -1 ? phraseIdx - 1 : this.phrasesCount - 1,
          };

          word.active = true;
        }
        return toActivate;
      });
    },
  };
}

export type IAudioPlayerStore = ReturnType<typeof AudioPlayerStore>;
