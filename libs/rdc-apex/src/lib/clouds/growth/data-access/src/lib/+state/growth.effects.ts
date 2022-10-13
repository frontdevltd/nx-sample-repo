import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as GrowthActions from './growth.actions';
import * as GrowthFeature from './growth.reducer';

@Injectable()
export class GrowthEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GrowthActions.initGrowth),
      fetch({
        run: (action) => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          return GrowthActions.loadGrowthSuccess({ growth: [] });
        },
        onError: (action, error) => {
          console.error('Error', error);
          return GrowthActions.loadGrowthFailure({ error });
        },
      })
    )
  );

  constructor(private readonly actions$: Actions) {}
}
