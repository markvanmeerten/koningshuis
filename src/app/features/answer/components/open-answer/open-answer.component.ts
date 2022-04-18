import { Component, Input } from '@angular/core';
import { OpenQuestion } from '@features/question/models/question.model';
import { Store } from '@ngrx/store';
import { setAnswer } from '@features/assignment/state/assignment.actions';

@Component({
  selector: 'app-open-answer',
  templateUrl: './open-answer.component.html',
  styleUrls: ['./open-answer.component.scss']
})
export class OpenAnswerComponent {
  @Input() public question: OpenQuestion;

  constructor(
    private readonly store: Store
  ) {
  }

  public updateAnswer(questionId: number, event: Event): void {
    const userAnswer = (event.target as HTMLInputElement)?.value;

    this.store.dispatch(setAnswer({
      questionId,
      userAnswer
    }))
  }
}
