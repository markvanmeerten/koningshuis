import { MultipleChoiceAnswer } from '@features/answer/models/answer.model';
import { QuestionType } from '../enums/question-type.enum';

export interface Question {
  questionId: number;
  question: string;
  questionType: QuestionType,
  userAnswer: number | string,
}

export interface MultipleChoiceQuestion extends Question {
  answers: MultipleChoiceAnswer[];
}

export interface OpenQuestion extends Question {
}
