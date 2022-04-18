import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { setAnswer } from '@features/assignment/state/assignment.actions';
import { MultipleChoiceQuestion } from '@features/question/models/question.model';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { AssignmentStatus } from '../../../assignment/enums/assignment-status.enum';
import { selectAssignmentStatus } from '../../../assignment/state/assignment.selectors';

@Component({
  selector: 'app-multiple-choice-answer',
  templateUrl: './multiple-choice-answer.component.html',
  styleUrls: ['./multiple-choice-answer.component.scss']
})
export class MultipleChoiceAnswerComponent implements OnInit, OnDestroy {
  @Input() public question: MultipleChoiceQuestion;

  public formGroup: FormGroup;
  public controlName: string = 'userAnswer';
  public isSelectedAnswerCorrect: boolean;

  private _destroy$: Subject<void> = new Subject<void>();

  constructor(
    private readonly store: Store,
    private readonly formBuilder: FormBuilder
  ) {
  }

  public get userAnswerControl(): FormControl {
    return this.formGroup.get('userAnswer') as FormControl;
  }

  public ngOnInit(): void {
    this.initializeFormGroup();
    this.handleAnswerChanges();
    this.handleStatusChanges();
  }

  public ngOnDestroy(): void {
    this._destroy$.next();
  }

  private initializeFormGroup(): void {
    this.formGroup = this.formBuilder.group({
      [this.controlName]: [+this.question.userAnswer, Validators.required]
    });
  }

  private handleAnswerChanges(): void {
    this.userAnswerControl.valueChanges.pipe(
      takeUntil(this._destroy$)
    ).subscribe((value) => {
      this.storeAnswer(this.question.questionId, +value);
    });
  }

  private storeAnswer(questionId: number, userAnswer: number): void {
    this.store.dispatch(setAnswer({
      questionId,
      userAnswer
    }));
  }

  private gradeAnswer(selectedAnswerId: number): void {
    const selectedAnswer = this.question.answers.find((answer) => answer.answerId === selectedAnswerId);

    this.isSelectedAnswerCorrect = (selectedAnswer && selectedAnswer.isCorrect) ?? false;
  }

  private handleStatusChanges(): void {
    this.store.select(selectAssignmentStatus).pipe(
      takeUntil(this._destroy$)
    ).subscribe((currentStatus) => {
      if (currentStatus === AssignmentStatus.Submitted) {
        const selectedAnswer = this.userAnswerControl.value;

        this.gradeAnswer(selectedAnswer);
        this.disableAnswer();
      } else {
        this.enableAnswer();
      }
    })
  }

  private disableAnswer(): void {
    this.userAnswerControl.disable({ emitEvent: false });
  }

  private enableAnswer(): void {
    this.userAnswerControl.enable({ emitEvent: false });
  }
}
