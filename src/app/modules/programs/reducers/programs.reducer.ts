import { Action, createSelector } from '@ngrx/store';
import { Program } from '../models/program';
import {
  programsActions,
  ProgramsListActionTypes,
} from '../actions/programs.actions';

export interface ProgramsState {
  programsList: Array<Program>;
}

export const initialState: ProgramsState = {
  programsList: [],
};

export function reducer(
  state = initialState,
  action: programsActions,
): ProgramsState {
  switch (action.type) {
    case ProgramsListActionTypes.LOAD_PROGRAMS: {
      console.log('ProgramsListActionTypes: ', { ...state });

      return { ...state };
    }

    case ProgramsListActionTypes.LOAD_PROGRAMS_SUCCESS:
    case ProgramsListActionTypes.LOAD_PROGRAMS_FAIL: {
      console.log('ProgramsListActionTypes: ', action.payload);
      return {
        ...state,
        programsList: action.payload,
      };
    }

    default:
      return state;
  }
}

export const selectPrograms = (state: ProgramsState) => state.programsList;
