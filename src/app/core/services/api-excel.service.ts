import { Injectable } from '@angular/core';
import * as XLSX from "xlsx";

@Injectable({
  providedIn: 'root'
})
export class ApiXlsxService<T> {
  public parse(filename: string): void {
    const excelFile = XLSX.readFile(filename);

    Object.keys(excelFile.Sheets).map((x) => {
      console.log(x);
    });
  }
}
