import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ProgramsService } from '../services/programs.service';
import { Observable, of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import {
  ProgramsListActionTypes,
  LoadProgramsSuccess,
  LoadProgramsFail,
} from '../actions/programs-list.actions';
import { Program } from '../models/program';

@Injectable()
export class ProgramsEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly service: ProgramsService,
  ) {}

  @Effect()
  getExtensionsList$: Observable<Action> = this.actions$.pipe(
    ofType(ProgramsListActionTypes.LoadProgramsList),
    switchMap(() =>
      this.service.getProgramsList().pipe(
        map((data: Array<Program>) => new LoadProgramsSuccess(data)),
        catchError(error => of(new LoadProgramsFail(error))),
      ),
    ),
  );
}
