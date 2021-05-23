import { Injectable } from '@angular/core';
import { Location, Vacevent} from "./location";
import {HttpClient} from "@angular/common/http";
import {Observable,throwError } from "rxjs";
import {catchError, retry} from 'rxjs/operators';


@Injectable()
export class LocationService {

  private api =  "https://kwmcorana.s1810456019.student.kwmhgb.at/api";

  constructor(private http: HttpClient) { }

  getAll(): Observable<Array<Location>> {
    return this.http.get(`${this.api}/locations`)
      .pipe(retry(3)).pipe(catchError(this.errorHandler))
  }

   getSingle(id: number): Observable<Location> {
    return this.http.get<Location>(`${this.api}/location/${id}`)
     .pipe(retry(3)).pipe(catchError(this.errorHandler))
  }

  

  private errorHandler(error: Error | any): Observable<any> {
  return throwError(error);
  }
}