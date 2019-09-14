export interface IPhrase {
  phrase: string;
  timeStart: number;
  words: IWord[];
}

export interface IWord {
  timeEnd: number;
  timeStart: number;
  word: string;
  active?: boolean;
}
