import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoutes } from '@core/enums/app-routes.enum';
import { Entity } from '@core/enums/entity.enum';
import { ApiHttpService } from '@core/services/api-http.service';
import { setAssignmentData } from '@features/assignment/state/assignment.actions';
import { selectAssignment } from '@features/assignment/state/assignment.selectors';
import { Store } from '@ngrx/store';
import { map, Observable, of, switchMap, tap } from 'rxjs';
import { Assignment } from '../models/assignment.model';

@Injectable({
  providedIn: 'root'
})
export class AssignmentService {
  public endpoint: string = `${AppRoutes.Assets}/${Entity.Assignment}`

  constructor(
    private readonly apiHttp: ApiHttpService<Assignment>,
    private readonly store: Store,
    private readonly router: Router
  ) {
  }

  public redirectToOverview(): void {
    this.router.navigateByUrl(`/${Entity.Assignment}/${AppRoutes.Overview}`);
  }

  /***
   * Fetch assignment by id. If the assignment does not exist in localStorage, make another
   * http call to retrieve the default assignment from JSON.
   *
   * N.B. For the purpose of this exercise starting a new assignment will overwrite the existing
   * assignment because of time constraints.
   *
   * @param assignmentId
   */
  public initializeData(assignmentId: number): Observable<Assignment> {
    return this.fetchDataFromLocalStorage().pipe(
      switchMap((assignment) => {
        const isInitialData = (assignment.id === -1);
        const isDifferentAssignment = (assignment.id !== assignmentId);

        return (isInitialData || isDifferentAssignment)
          ? this.fetchDataFromJSON(assignmentId)
          : of(assignment);
      })
    );
  }

  private fetchDataFromLocalStorage(): Observable<Assignment> {
    return this.store.select(selectAssignment).pipe(
      map((assignmentStore) => assignmentStore.data)
    );
  }

  private fetchDataFromJSON(assignmentId: number): Observable<Assignment> {
    const url = `${this.endpoint}/${assignmentId}.json`;

    return this.apiHttp.get<Assignment>(url).pipe(
      tap((assignment) => {
        this.store.dispatch(setAssignmentData({ assignment }))
      })
    );
  }
}
