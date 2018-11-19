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
} from '../actions/programs.actions';

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
      this.service.getProgramsList().pipe(
        map((data: Array<Program>) => new LoadProgramsSuccess(data)),
        catchError(error => of(new LoadProgramsFail(error))),
      ),
    ),
  );

  @Effect()
  loadProgramDetails$ = this.actions$
    .ofType(ProgramsListActionTypes.LOAD_PROGRAMS)
    .pipe(
      switchMap(() => {
        return this.service.getProgramsList().pipe(
          map(programs => new LoadProgramsSuccess(programs)),
          catchError(error => of(new LoadProgramsFail(error))),
        );
      }),
    );
}
