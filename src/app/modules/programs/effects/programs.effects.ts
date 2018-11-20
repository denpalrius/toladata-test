import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ProgramsService } from '../services/programs.service';
import { Observable, of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { Program } from '../models/program';
import {
  ProgramsListActionTypes,
  LoadProgramsSuccess,
  LoadProgramsFail,
  ProgramPayload,
  LoadProgram,
  LoadProgramSuccess,
  LoadProgramFail,
  CreateActivity,
  CreateActivitySuccess,
  CreateActivityFail,
  DeleteteActivity,
  DeleteActivityFail,
  DeleteActivitySuccess,
} from '../actions/programs.actions';
import { Activity } from '../models/activity';

@Injectable()
export class ProgramsEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly service: ProgramsService,
  ) {}

  @Effect()
  loadPrograms$: Observable<Action> = this.actions$.pipe(
    ofType(ProgramsListActionTypes.LOAD_PROGRAMS),
    switchMap(() =>
      this.service.getPrograms().pipe(
        map((programs: Program[]) => new LoadProgramsSuccess(programs)),
        catchError(error => of(new LoadProgramsFail(error))),
      ),
    ),
  );

  @Effect()
  loadProgram$ = this.actions$
    .ofType(ProgramsListActionTypes.LOAD_PROGRAM)
    .pipe(
      switchMap((action: LoadProgram) => {
        return this.service.getProgramActivites(action.payload).pipe(
          map((activities: Activity[]) => new LoadProgramSuccess(activities)),
          catchError(error => of(new LoadProgramFail(error))),
        );
      }),
    );

  @Effect()
  addActivity$: Observable<Action> = this.actions$.pipe(
    ofType(ProgramsListActionTypes.CREATE_ACTIVITY),
    switchMap((action: CreateActivity) =>
      this.service.addActivity(action.payload).pipe(
        map((activity: Activity) => new CreateActivitySuccess(activity)),
        catchError(error => of(new CreateActivityFail(error))),
      ),
    ),
  );

  @Effect()
  deleteActivity$ = this.actions$
    .ofType(ProgramsListActionTypes.DELETE_ACTIVITY)
    .pipe(
      switchMap((action: DeleteteActivity) => {
        return this.service.deleteActivity(action.payload).pipe(
          map(status => new DeleteActivitySuccess(status)),
          catchError(error => of(new DeleteActivityFail(error))),
        );
      }),
    );
}
