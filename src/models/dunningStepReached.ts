/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema } from '../schema';
import { DunnerData, dunnerDataSchema } from './dunnerData';
import { DunningStepData, dunningStepDataSchema } from './dunningStepData';

export interface DunningStepReached {
  dunner: DunnerData;
  currentStep: DunningStepData;
  nextStep: DunningStepData;
}

export const dunningStepReachedSchema: Schema<DunningStepReached> = object({
  dunner: ['dunner', lazy(() => dunnerDataSchema)],
  currentStep: ['current_step', lazy(() => dunningStepDataSchema)],
  nextStep: ['next_step', lazy(() => dunningStepDataSchema)],
});
