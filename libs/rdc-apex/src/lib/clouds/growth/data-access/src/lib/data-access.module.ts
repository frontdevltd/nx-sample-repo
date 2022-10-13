import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromGrowth from './+state/growth.reducer';
import { GrowthEffects } from './+state/growth.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromGrowth.GROWTH_FEATURE_KEY,
      fromGrowth.growthReducer
    ),
    EffectsModule.forFeature([GrowthEffects]),
  ],
})
export class DataAccessModule {}
