import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Question } from '@features/question/models/question.model';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { AssignmentStatus } from '../../enums/assignment-status.enum';
import { AssignmentService } from '../../services/assignment.service';
import { resetAssignment, setAssignmentStatus } from '../../state/assignment.actions';
import { selectAssignmentStatus, selectQuestions } from '../../state/assignment.selectors';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.scss']
})
export class AssignmentComponent implements OnInit, OnDestroy {
  public AssignmentStatus: typeof AssignmentStatus = AssignmentStatus;

  public title: string;
  public description: string;
  public currentStatus$: Observable<AssignmentStatus>;
  public currentQuestions$: Observable<Question[]>;

  private _destroy$: Subject<void> = new Subject<void>();

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly assignmentService: AssignmentService,
    private readonly store: Store
  ) {
  }

  public ngOnInit(): void {
    this.title = this.route.snapshot.data['assignment'].name;
    this.description = this.route.snapshot.data['assignment'].introText;

    this.currentStatus$ = this.store.select(selectAssignmentStatus);
    this.currentQuestions$ = this.store.select(selectQuestions);
  }

  public ngOnDestroy() {
    this._destroy$.next();
  }

  public onBackClick(): void {
    this.assignmentService.redirectToOverview();
  }

  public onStartClick(): void {
    this.store.dispatch(setAssignmentStatus({ status: AssignmentStatus.Active }));
  }

  public onSubmitClick(): void {
    this.store.dispatch(setAssignmentStatus({ status: AssignmentStatus.Submitted }));
  }

  public onRetryClick(): void {
    this.store.dispatch(resetAssignment());
    this.store.dispatch(setAssignmentStatus({ status: AssignmentStatus.InActive }));
  }
}
