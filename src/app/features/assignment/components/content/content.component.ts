import { Component, Input } from '@angular/core';
import { Question } from '@features/question/models/question.model';
import { AssignmentStatus } from '../../enums/assignment-status.enum';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {
  @Input() questions: Question[];
  @Input() currentStatus: AssignmentStatus;

  public Status: typeof AssignmentStatus = AssignmentStatus;
}
