import { Action } from '@ngrx/store';
import { Program } from '../models/program';
import { Activity } from '../models/activity';

export enum ProgramsListActionTypes {
  LOAD_PROGRAMS = '[ProgramsList] Load Programs Lists',
  LOAD_PROGRAMS_SUCCESS = '[ProgramsList] Load Programs Lists Success',
  LOAD_PROGRAMS_FAIL = '[ProgramsList] Load Programs Lists Fail',

  LOAD_PROGRAM = '[ProgramsDetails] Load Program',
  LOAD_PROGRAM_SUCCESS = '[ProgramsDetails] Load Program Success',
  LOAD_PROGRAM_FAIL = '[ProgramsDetails] Load Program Fail',

  CREATE_ACTIVITY = '[CreateActivity] Create Activity',
  CREATE_ACTIVITY_SUCCESS = '[CreateActivity] Create Activity Success',
  CREATE_ACTIVITY_FAIL = '[CreateActivity] Create Activity Fail',

  DELETE_ACTIVITY = '[DeleteActivity] Delete Activity',
  DELETE_ACTIVITY_SUCCESS = '[DeleteActivity] Delete Activity Success',
  DELETE_ACTIVITY_FAIL = '[DeleteActivity] Delete Activity Fail',

  RESET_DETAILS = '[Programs] Reset All',
}

export class LoadPrograms implements Action {
  readonly type = ProgramsListActionTypes.LOAD_PROGRAMS;
}

export class LoadProgramsSuccess implements Action {
  readonly type = ProgramsListActionTypes.LOAD_PROGRAMS_SUCCESS;

  constructor(public payload: Program[]) {}
}
export class LoadProgramsFail implements Action {
  readonly type = ProgramsListActionTypes.LOAD_PROGRAMS_FAIL;

  constructor(public payload: any) {}
}

export class LoadProgram implements Action {
  readonly type = ProgramsListActionTypes.LOAD_PROGRAM;

  constructor(public payload: ProgramPayload) {}
}

export class LoadProgramSuccess implements Action {
  readonly type = ProgramsListActionTypes.LOAD_PROGRAM_SUCCESS;

  constructor(public payload: Activity[]) {}
}
export class LoadProgramFail implements Action {
  readonly type = ProgramsListActionTypes.LOAD_PROGRAM_FAIL;

  constructor(public payload: any) {}
}

export class CreateActivity implements Action {
  readonly type = ProgramsListActionTypes.CREATE_ACTIVITY;

  constructor(public payload: Activity) {}
}

export class CreateActivitySuccess implements Action {
  readonly type = ProgramsListActionTypes.CREATE_ACTIVITY_SUCCESS;

  constructor(public payload: Activity) {}
}
export class CreateActivityFail implements Action {
  readonly type = ProgramsListActionTypes.CREATE_ACTIVITY_FAIL;

  constructor(public payload: any) {}
}

export class DeleteteActivity implements Action {
  readonly type = ProgramsListActionTypes.DELETE_ACTIVITY;

  constructor(public payload: ProgramPayload) {}
}

export class DeleteActivitySuccess implements Action {
  readonly type = ProgramsListActionTypes.DELETE_ACTIVITY_SUCCESS;

  constructor(public payload: any) {}
}
export class DeleteActivityFail implements Action {
  readonly type = ProgramsListActionTypes.DELETE_ACTIVITY_FAIL;

  constructor(public payload: any) {}
}

export class ResetDetails implements Action {
  readonly type = ProgramsListActionTypes.RESET_DETAILS;
}

export type programsActions =
  | LoadPrograms
  | LoadProgramsSuccess
  | LoadProgramsFail
  | LoadProgram
  | LoadProgramSuccess
  | LoadProgramFail
  | CreateActivity
  | CreateActivitySuccess
  | CreateActivityFail
  | DeleteteActivity
  | DeleteActivitySuccess
  | DeleteActivityFail
  | ResetDetails;

export class ProgramPayload {
  programId: string;
}
