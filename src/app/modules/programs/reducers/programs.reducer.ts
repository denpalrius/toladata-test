import { Action, createSelector } from '@ngrx/store';
import { Program } from '../models/program';
import {
  programsActions,
  ProgramsListActionTypes,
} from '../actions/programs.actions';
import { Activity } from '../models/activity';

export interface ProgramsState {
  programs: Array<Program>;
  selectedActivities: Activity[];
  createdActivity: Activity;
  deleteState: boolean;
}

export const initialState: ProgramsState = {
  programs: [],
  selectedActivities: [],
  createdActivity: new Activity(),
  deleteState: false,
};

export function reducer(
  state = initialState,
  action: programsActions,
): ProgramsState {
  switch (action.type) {
    // List
    case ProgramsListActionTypes.LOAD_PROGRAMS: {
      return { ...state };
    }

    case ProgramsListActionTypes.LOAD_PROGRAMS_SUCCESS:
    case ProgramsListActionTypes.LOAD_PROGRAMS_FAIL: {
      console.log(action.type, action.payload);
      return {
        ...state,
        programs: action.payload,
      };
    }

    // Details
    case ProgramsListActionTypes.LOAD_PROGRAM: {
      console.log(action.type, action.payload);
      return { ...state };
    }

    case ProgramsListActionTypes.LOAD_PROGRAM_SUCCESS:
    case ProgramsListActionTypes.LOAD_PROGRAM_FAIL: {
      console.log(action.type, action.payload);
      return {
        ...state,
        selectedActivities: action.payload,
      };
    }

    // Create
    case ProgramsListActionTypes.CREATE_ACTIVITY:
    case ProgramsListActionTypes.CREATE_ACTIVITY_SUCCESS:
    case ProgramsListActionTypes.CREATE_ACTIVITY_FAIL: {
      console.log(action.type, action.payload);

      return { ...state, createdActivity: action.payload };
    }

    // Delete
    case ProgramsListActionTypes.DELETE_ACTIVITY: {
      console.log(action.type, action.payload);

      return { ...state };
    }

    case ProgramsListActionTypes.DELETE_ACTIVITY_SUCCESS: {
      console.log(action.type, action.payload);

      return { ...state, deleteState: true };
    }

    case ProgramsListActionTypes.DELETE_ACTIVITY_FAIL: {
      return { ...state, deleteState: false };
    }

    case ProgramsListActionTypes.RESET_DETAILS: {
      console.log(action.type, state);

      return { ...state, selectedActivities: [] };
    }

    default:
      return state;
  }
}

export const selectPrograms = (state: ProgramsState) => state.programs;
export const selectProgramActivities = (state: ProgramsState) =>
  state.selectedActivities;
export const selectCreatedActivity = (state: ProgramsState) =>
  state.createdActivity;
export const selectDeletedActivity = (state: ProgramsState) =>
  state.deleteState;
