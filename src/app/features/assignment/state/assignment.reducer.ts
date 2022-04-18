import { Assignment, AssignmentStore } from '@features/assignment/models/assignment.model';
import { createReducer, on } from '@ngrx/store';
import { Question } from '../../question/models/question.model';
import { AssignmentStatus } from '../enums/assignment-status.enum';
import { resetAssignment, setAnswer, setAssignmentData, setAssignmentStatus } from './assignment.actions';
import { initialState } from './assignment.initial.state';

const setAssignmentDataReducer = (state: AssignmentStore, props: { assignment: Assignment }) => {
  const { assignment } = props;

  return {
    ...state,
    data: assignment
  }
}

const setAnswerReducer = (state: AssignmentStore, props: { questionId: number, userAnswer: number | string }) => {
  const { questionId, userAnswer } = props;
  const answeredQuestionIndex = state.data.questions.findIndex((question) => {
    return question.questionId === questionId;
  });

  return {
    ...state,
    data: {
      ...state.data,
      questions: [
        ...state.data.questions.slice(0, answeredQuestionIndex),
        {
          ...state.data.questions[answeredQuestionIndex],
          userAnswer: userAnswer
        },
        ...state.data.questions.slice(answeredQuestionIndex + 1)
      ]
    }
  };
};

const resetAssignmentReducer = (state: AssignmentStore) => {
  const scrubbedQuestions = state.data.questions.map((question: Question) => {
    return {
      ...question,
      userAnswer: null
    } as unknown as Question
  });

  return {
    ...state,
    data: {
      ...state.data,
      questions: scrubbedQuestions
    }
  }
};

const setAssignmentStatusReducer = (state: AssignmentStore, props: { status: AssignmentStatus }) => ({
  ...state,
  progress: {
    ...state.progress,
    currentStatus: props.status
  }
});

export const assignmentReducer = createReducer(
  initialState,
  on(setAssignmentData, setAssignmentDataReducer),
  on(setAnswer, setAnswerReducer),
  on(resetAssignment, resetAssignmentReducer),
  on(setAssignmentStatus, setAssignmentStatusReducer)
);
