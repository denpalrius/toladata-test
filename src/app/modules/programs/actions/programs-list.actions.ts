import { Action } from '@ngrx/store';
import { Program } from '../models/program';

export enum ProgramsListActionTypes {
  LoadProgramsList = '[ProgramsList] Load Programs Lists',
  LoadProgramsListSuccess = '[ProgramsList] Load Programs Lists Success',
  LoadProgramsListFail = '[ProgramsList] Load Programs Lists Fail',
}

export class LoadPrograms implements Action {
  readonly type = ProgramsListActionTypes.LoadProgramsList;
}

export class LoadProgramsSuccess implements Action {
  readonly type = ProgramsListActionTypes.LoadProgramsListSuccess;

  constructor(public payload: Array<Program>) {}
}
export class LoadProgramsFail implements Action {
  readonly type = ProgramsListActionTypes.LoadProgramsListFail;

  constructor(public payload: Array<Program>) {}
}
export type ProgramsActions =
  | LoadPrograms
  | LoadProgramsSuccess
  | LoadProgramsFail;
