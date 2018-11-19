import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromProgramsList from '../modules/programs/reducers/programs-list.reducer';
import { State } from '../modules/programs/reducers/programs-list.reducer';

export interface ProgramsState {
  programsList: fromProgramsList.State;
}

export interface State extends fromProgramsList.State {
  programs: ProgramsState;
}

export const reducers: ActionReducerMap<ProgramsState> = {
  programsList: fromProgramsList.reducer,
};

export function logger(
  reducer: ActionReducer<State>,
): ActionReducer<State> {
  return function(state: State, action: any): State {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}


export const metaReducers: MetaReducer<any>[] = !environment.production
  ? []
  : [];
