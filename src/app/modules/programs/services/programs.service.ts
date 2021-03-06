import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Program } from '../models/program';
import { Activity } from '../models/activity';
import { ProgramPayload, ActivityPayload } from '../actions/programs.actions';

@Injectable()
export class ProgramsService {
  constructor(private readonly http: HttpClient) {}

  endpoints = {
    programs: 'https://dev.toladata.io/api/workflowlevel1',
    activities: 'https://dev.toladata.io/api/workflowlevel2',
  };

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer GfR6vIHG0zTWaJle6TjNXvYUrjDn6g',
    }),
  };

  getPrograms(): Observable<Program[]> {
    return this.http
      .get<Program[]>(`${this.endpoints.programs}/`, this.httpOptions)
      .pipe(
        map((result: any) => {
          return result.map(program => {
            return new Program(program);
          });
        }),
        catchError(this.catchError),
      );
  }

  getProgramActivites(payload: ProgramPayload): Observable<Activity[]> {
    return this.http
      .get<Activity[]>(
        `${this.endpoints.activities}/?workflowlevel1__id=${payload.programId}`,
        this.httpOptions,
      )
      .pipe(
        map((result: any) => {
          return result.map(newActivity => {
            return new Activity(newActivity);
          });
        }),
        catchError(this.catchError),
      );
  }

  addActivity(newActivity: Activity): Observable<Activity> {
    return this.http
      .post<Activity>(
        `${this.endpoints.activities}/`,
        newActivity,
        this.httpOptions,
      )
      .pipe(
        catchError(this.catchError),
        map((result: any) => {
          return new Activity(result);
        }),
      );
  }

  deleteActivity(payload: ActivityPayload): Observable<boolean> {
    return this.http
      .delete<Program>(
        `${this.endpoints.activities}/${payload.id}/`,
        this.httpOptions,
      )
      .pipe(
        catchError(this.catchError),
        map((result: any) => {
          return result.map(activity => {
            return true;
          });
        }),
      );
  }

  catchError(error: any, parameter: any): Observable<never> {
    console.log(error);
    return throwError(error);
  }
}
