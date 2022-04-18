import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AssignmentStore } from '../models/assignment.model';

export const selectAssignment = createFeatureSelector<AssignmentStore>('assignment');

export const selectAssignmentStatus = createSelector(
  selectAssignment,
  (assignmentStore) => {
    return assignmentStore.progress.currentStatus;
  }
)

export const selectQuestions = createSelector(
  selectAssignment,
  (assignmentStore) => {
    return assignmentStore.data.questions;
  }
)
