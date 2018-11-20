import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import * as fromPrograms from '../../programs/reducers/programs.reducer';

export interface ProgramsState {
  programs: fromPrograms.ProgramsState;
}

export const reducers: ActionReducerMap<ProgramsState> = {
  programs: fromPrograms.reducer,
};

export const getProgramsRootState = createFeatureSelector<ProgramsState>(
  'programs',
);

export const getProgramsState = createSelector(
  getProgramsRootState,
  (state: ProgramsState) => state.programs,
);
