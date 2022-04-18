import { MultipleChoiceQuestion, OpenQuestion } from '@features/question/models/question.model';
import { AssignmentStatus } from '../enums/assignment-status.enum';

export interface AssignmentStore {
  data: Assignment,
  progress: Progress,
}

export interface Assignment {
  id: number;
  name: string;
  introText: string;
  questions: (OpenQuestion | MultipleChoiceQuestion)[];
}

export interface Progress {
  currentStatus: AssignmentStatus,
  currentQuestion: number,
}
