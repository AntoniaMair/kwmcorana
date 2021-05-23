import { Injectable } from '@angular/core';
import { Vacevent, Vaccinated } from "./vacevent";
import {HttpClient} from "@angular/common/http";
import {Observable,throwError } from "rxjs";
import {catchError, retry} from 'rxjs/operators';

@Injectable()
export class VaceventService {

  private api = "https://kwmcorana.s1810456019.student.kwmhgb.at/api";

  constructor(private http: HttpClient) { }

  getAll(location_id: number): Observable<Array<Vacevent>> {
    return this.http.get(`${this.api}/vacevent/searchloc/${location_id}`)
      .pipe(retry(3)).pipe(catchError(this.errorHandler))
  }
  getSingle(id: number): Observable<Vacevent> {
    return this.http.get<Vacevent>(`${this.api}/vacevent/${id}`)
     .pipe(retry(3)).pipe(catchError(this.errorHandler))
  }
  getByVaccinated(vaccinated_id: number): Observable<Vacevent> {
    return this.http.get<Vacevent>(`${this.api}/vacevent/search/${vaccinated_id}`)
     .pipe(retry(3)).pipe(catchError(this.errorHandler))
  }
  create(vacevent: Vacevent): Observable<any> {
    return this.http.post(`${this.api}/vacevent`, vacevent)
      .pipe(retry(3)).pipe(catchError(this.errorHandler))
  }
  updated(vacevent: Vacevent): Observable<any> {
    return this.http.post(`${this.api}/vacevent/${vacevent.id}`, vacevent)
      .pipe(retry(3)).pipe(catchError(this.errorHandler))
  }
  remove(id: number): Observable<any> {
    return this.http.delete(`${this.api}/vacevent/${id}`)
      .pipe(retry(3)).pipe(catchError(this.errorHandler));
  }
  private errorHandler(error: Error | any): Observable<any> {
    return throwError(error);
  }

}