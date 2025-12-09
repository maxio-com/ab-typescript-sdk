/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema.js';
import { DunnerData, dunnerDataSchema } from './dunnerData.js';
import { DunningStepData, dunningStepDataSchema } from './dunningStepData.js';

export interface DunningStepReached {
  dunner: DunnerData;
  currentStep: DunningStepData;
  nextStep: DunningStepData;
  [key: string]: unknown;
}

export const dunningStepReachedSchema: Schema<DunningStepReached> = lazy(() =>
  expandoObject({
    dunner: ['dunner', dunnerDataSchema],
    currentStep: ['current_step', dunningStepDataSchema],
    nextStep: ['next_step', dunningStepDataSchema],
  })
);
