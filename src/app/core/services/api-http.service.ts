import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiHttpService<T> {
  constructor(
    private httpService: HttpClient
  ) {
  }

  public get<T>(url: string): Observable<T> {
    return this.httpService.get(url) as Observable<T>;
  }
}
