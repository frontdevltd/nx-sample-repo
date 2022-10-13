import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as GrowthActions from './growth.actions';
import { GrowthEntity } from './growth.models';

export const GROWTH_FEATURE_KEY = 'growth';

export interface GrowthState extends EntityState<GrowthEntity> {
  selectedId?: string | number; // which Growth record has been selected
  loaded: boolean; // has the Growth list been loaded
  error?: string | null; // last known error (if any)
}

export interface GrowthPartialState {
  readonly [GROWTH_FEATURE_KEY]: GrowthState;
}

export const growthAdapter: EntityAdapter<GrowthEntity> =
  createEntityAdapter<GrowthEntity>();

export const initialGrowthState: GrowthState = growthAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const reducer = createReducer(
  initialGrowthState,
  on(GrowthActions.initGrowth, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(GrowthActions.loadGrowthSuccess, (state, { growth }) =>
    growthAdapter.setAll(growth, { ...state, loaded: true })
  ),
  on(GrowthActions.loadGrowthFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function growthReducer(state: GrowthState | undefined, action: Action) {
  return reducer(state, action);
}
