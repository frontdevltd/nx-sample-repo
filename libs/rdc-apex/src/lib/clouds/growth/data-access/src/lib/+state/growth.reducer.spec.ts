import { Action } from '@ngrx/store';

import * as GrowthActions from './growth.actions';
import { GrowthEntity } from './growth.models';
import {
  GrowthState,
  initialGrowthState,
  growthReducer,
} from './growth.reducer';

describe('Growth Reducer', () => {
  const createGrowthEntity = (id: string, name = ''): GrowthEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Growth actions', () => {
    it('loadGrowthSuccess should return the list of known Growth', () => {
      const growth = [
        createGrowthEntity('PRODUCT-AAA'),
        createGrowthEntity('PRODUCT-zzz'),
      ];
      const action = GrowthActions.loadGrowthSuccess({ growth });

      const result: GrowthState = growthReducer(initialGrowthState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = growthReducer(initialGrowthState, action);

      expect(result).toBe(initialGrowthState);
    });
  });
});
