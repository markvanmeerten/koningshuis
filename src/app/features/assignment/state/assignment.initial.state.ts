import { AssignmentStatus } from '../enums/assignment-status.enum';
import { AssignmentStore } from '../models/assignment.model';

export const initialState: AssignmentStore = {
  data: {
    id: -1,
    name: '',
    introText: '',
    questions: []
  },
  progress: {
    currentStatus: AssignmentStatus.Active,
    currentQuestion: 1
  }
};
