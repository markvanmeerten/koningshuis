export interface Answer {

}

export interface MultipleChoiceAnswer extends Answer {
  answer: string;
  answerId: number;
  isCorrect: boolean;
}

export interface OpenAnswer extends Answer {
  max_length: number;
}
