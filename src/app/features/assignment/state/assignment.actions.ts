import { Assignment } from '@features/assignment/models/assignment.model';
import { createAction, props } from '@ngrx/store';
import { AssignmentStatus } from '../enums/assignment-status.enum';

const stateHandle = '[Assignment]'

export const setAssignmentData = createAction(
  `[${stateHandle}] Set assignment`,
  props<{ assignment: Assignment }>()
);

export const setAssignmentStatus = createAction(
  `[${stateHandle}] Set current status`,
  props<{ status: AssignmentStatus }>()
);

export const setAnswer = createAction(
  `[${stateHandle}] Answer`,
  props<{ questionId: number, userAnswer: string | number }>()
);

export const resetAssignment = createAction(
  `[${stateHandle}] Reset`
);

export const startAssignment = createAction(
  `[${stateHandle}] Start`
);
