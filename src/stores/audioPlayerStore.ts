import { transcript as initialPhrases } from '../assets/transcript';

type ILastActivePositon = { wordPosition: number; phrasePosition: number };

export function AudioPlayerStore() {
  let lastActivePosition: ILastActivePositon | undefined = undefined;

  return {
    phrases: initialPhrases,
    get phrasesCount() {
      return this.phrases.length;
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
