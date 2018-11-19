import { Action } from '@ngrx/store';
import { Program } from '../models/program';

export enum ProgramsListActionTypes {
  LOAD_PROGRAMS = '[ProgramsList] Load Programs Lists',
  LOAD_PROGRAMS_SUCCESS = '[ProgramsList] Load Programs Lists Success',
  LOAD_PROGRAMS_FAIL = '[ProgramsList] Load Programs Lists Fail',
}

export class LoadPrograms implements Action {
  readonly type = ProgramsListActionTypes.LOAD_PROGRAMS;
}

export class LoadProgramsSuccess implements Action {
  readonly type = ProgramsListActionTypes.LOAD_PROGRAMS_SUCCESS;

  constructor(public payload: Array<Program>) {}
}
export class LoadProgramsFail implements Action {
  readonly type = ProgramsListActionTypes.LOAD_PROGRAMS_FAIL;

  constructor(public payload: Array<Program>) {}
}

export type programsActions =
  | LoadPrograms
  | LoadProgramsSuccess
  | LoadProgramsFail;
