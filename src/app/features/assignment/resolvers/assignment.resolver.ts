import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { catchError, first, map, Observable, of, switchMap, tap, throwError } from 'rxjs';
import { Assignment } from '../models/assignment.model';
import { AssignmentService } from '../services/assignment.service';

@Injectable({ providedIn: 'root' })
export class AssignmentResolver implements Resolve<Observable<Assignment>> {
  public constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly assignmentService: AssignmentService
  ) {
  }

  private fillStore(id: string): Observable<Assignment> {
    return of(id).pipe(
      map((id) => {
        if (isNaN(+id)) {
          throw new Error('Invalid assignmentId');
        }

        return +id;
      }),
      switchMap((id) => {
        return this.assignmentService.initializeData(id);
      }),
      catchError((error) => {
        this.assignmentService.redirectToOverview();

        return throwError(error);
      })
    )
  }

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Assignment> {
    return this.fillStore(route.params['id']).pipe(
      first()
    )
  }
}
