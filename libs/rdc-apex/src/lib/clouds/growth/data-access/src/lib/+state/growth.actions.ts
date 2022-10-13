import { createAction, props } from '@ngrx/store';
import { GrowthEntity } from './growth.models';

export const initGrowth = createAction('[Growth Page] Init');

export const loadGrowthSuccess = createAction(
  '[Growth/API] Load Growth Success',
  props<{ growth: GrowthEntity[] }>()
);

export const loadGrowthFailure = createAction(
  '[Growth/API] Load Growth Failure',
  props<{ error: any }>()
);
