import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import * as GrowthActions from './growth.actions';
import { GrowthEffects } from './growth.effects';

describe('GrowthEffects', () => {
  let actions: Observable<Action>;
  let effects: GrowthEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        GrowthEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(GrowthEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: GrowthActions.initGrowth() });

      const expected = hot('-a-|', {
        a: GrowthActions.loadGrowthSuccess({ growth: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
