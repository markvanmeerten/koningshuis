import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { ApiExcelService } from '@core/services/api-excel.service';
import { first, Observable, tap } from 'rxjs';
import { Domain } from '../models/domain.model';

@Injectable({ providedIn: 'root' })
export class DomainResolver implements Resolve<Observable<Domain>> {
  public constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly apiExcelService: ApiExcelService
  ) {
  }

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Domain> {
    const filename = 'assets/domain/domeinen-natuurkunde.xlsx';

    return this.apiExcelService.get(filename).pipe(
      first(),
      tap(console.log) // @TODO: Do something with this data!
    )
  }
}
