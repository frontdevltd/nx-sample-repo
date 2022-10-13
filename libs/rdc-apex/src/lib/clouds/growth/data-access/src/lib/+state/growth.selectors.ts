import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  GROWTH_FEATURE_KEY,
  GrowthState,
  growthAdapter,
} from './growth.reducer';

// Lookup the 'Growth' feature state managed by NgRx
export const getGrowthState =
  createFeatureSelector<GrowthState>(GROWTH_FEATURE_KEY);

const { selectAll, selectEntities } = growthAdapter.getSelectors();

export const getGrowthLoaded = createSelector(
  getGrowthState,
  (state: GrowthState) => state.loaded
);

export const getGrowthError = createSelector(
  getGrowthState,
  (state: GrowthState) => state.error
);

export const getAllGrowth = createSelector(
  getGrowthState,
  (state: GrowthState) => selectAll(state)
);

export const getGrowthEntities = createSelector(
  getGrowthState,
  (state: GrowthState) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getGrowthState,
  (state: GrowthState) => state.selectedId
);

export const getSelected = createSelector(
  getGrowthEntities,
  getSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);
