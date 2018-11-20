import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import * as fromPrograms from '../../programs/reducers/programs.reducer';

export interface ProgramsState {
  programs: fromPrograms.ProgramsState;
}

export const reducers: ActionReducerMap<ProgramsState> = {
  programs: fromPrograms.reducer,
};

export const getProgramsListState = createFeatureSelector<ProgramsState>(
  'programs',
);

export const getProgramsState = createSelector(
  getProgramsListState,
  (state: ProgramsState) => state.programs,
);
