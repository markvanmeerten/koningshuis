import { Component, Input } from '@angular/core';
import { QuestionType } from '../../enums/question-type.enum';
import { MultipleChoiceQuestion, OpenQuestion, Question } from '../../models/question.model';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent {
  @Input() public question: Question;

  public QuestionType: typeof QuestionType = QuestionType;
  public MultipleChoiceQuestion: MultipleChoiceQuestion;
  public OpenQuestion: OpenQuestion;
}
