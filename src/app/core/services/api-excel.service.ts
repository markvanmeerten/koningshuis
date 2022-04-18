import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Domain } from '@features/assignment/models/domain.model';
import { map, Observable } from 'rxjs';
import * as XLSX from 'xlsx';

@Injectable({
  providedIn: 'root'
})
export class ApiExcelService {
  constructor(
    private httpService: HttpClient
  ) {
  }

  public get(filename: string): Observable<Domain[]> {
    return this.httpService.get(filename, { responseType: 'arraybuffer' }).pipe(
      map((arrayBuffer) => {
        const workSheet = XLSX.read(arrayBuffer).Sheets['Sheet1'];

        return XLSX.utils.sheet_to_json<Domain>(workSheet);
      })
    )
  }
}
