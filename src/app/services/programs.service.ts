import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of, throwError } from 'rxjs';
import { Program } from '../models/program';
import { catchError, map } from 'rxjs/operators';
import { Activity } from '../models/activity';

@Injectable()
export class ProgramsService {
  constructor(
    // private readonly store: Store<fromProgramsState.State>,
    private readonly http: HttpClient,
  ) {}

  endpoints = {
    programs: 'https://dev.toladata.io/api/workflowlevel1/',
    activities: 'https://dev.toladata.io/api/workflowlevel2/',
  };

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer GfR6vIHG0zTWaJle6TjNXvYUrjDn6g',
    }),
  };

  getProgramsList(): Observable<Array<Program>> {
    return this.http
      .get<Array<Program>>(`${this.endpoints.programs}`, this.httpOptions)
      .pipe(
        catchError(this.catchError),
        map((result: any) => {
          return result.map(program => {
            return new Program(program);
          });
        }),
      );
  }

  addActivity(newActivity: Activity): Observable<Activity> {
    return this.http
      .post<Activity>(
        `${this.endpoints.activities}`,
        newActivity,
        this.httpOptions,
      )
      .pipe(
        catchError(this.catchError),
        map((result: any) => {
          return result.map(activity => {
            return new Activity(activity);
          });
        }),
      );
  }

  catchError(error: any, parameter: any): Observable<never> {
    console.log(error);
    return throwError(error);
  }
}
