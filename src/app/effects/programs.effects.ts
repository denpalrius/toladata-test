import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { ProgramsService } from '../services/programs.service';

@Injectable()
export class ProgramsEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly svc: ProgramsService,
  ) {}
}
