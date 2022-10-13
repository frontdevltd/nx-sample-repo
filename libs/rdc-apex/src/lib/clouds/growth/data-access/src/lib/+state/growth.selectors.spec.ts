import { GrowthEntity } from './growth.models';
import {
  growthAdapter,
  GrowthPartialState,
  initialGrowthState,
} from './growth.reducer';
import * as GrowthSelectors from './growth.selectors';

describe('Growth Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getGrowthId = (it: GrowthEntity) => it.id;
  const createGrowthEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as GrowthEntity);

  let state: GrowthPartialState;

  beforeEach(() => {
    state = {
      growth: growthAdapter.setAll(
        [
          createGrowthEntity('PRODUCT-AAA'),
          createGrowthEntity('PRODUCT-BBB'),
          createGrowthEntity('PRODUCT-CCC'),
        ],
        {
          ...initialGrowthState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Growth Selectors', () => {
    it('getAllGrowth() should return the list of Growth', () => {
      const results = GrowthSelectors.getAllGrowth(state);
      const selId = getGrowthId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = GrowthSelectors.getSelected(state) as GrowthEntity;
      const selId = getGrowthId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getGrowthLoaded() should return the current "loaded" status', () => {
      const result = GrowthSelectors.getGrowthLoaded(state);

      expect(result).toBe(true);
    });

    it('getGrowthError() should return the current "error" state', () => {
      const result = GrowthSelectors.getGrowthError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
