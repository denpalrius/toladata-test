import { Action, createSelector } from '@ngrx/store';
import { Program } from '../models/program';
import {
  ProgramsListActions,
  ProgramsListActionTypes,
} from '../actions/programs-list.actions';

export interface State {
  programsList: Array<Program>;
}

export const initialState: State = {
  programsList: [],
};

export function reducer(
  state = initialState,
  action: ProgramsListActions,
): State {
  switch (action.type) {
    case ProgramsListActionTypes.LoadProgramsList: {
      console.log('ProgramsListActionTypes: ', { ...state });

      return { ...state };
    }

    case ProgramsListActionTypes.LoadProgramsListSuccess:
    case ProgramsListActionTypes.LoadProgramsListFail: {
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

export const selectProgramsList = (state: State) => state.programsList;
// export const selectFeatureCount = createSelector(
//   selectProgramsList,
//   (state: FeatureState) => state.counter
//  );
