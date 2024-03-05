/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, optional, Schema } from '../schema';
import { AutoResume, autoResumeSchema } from './autoResume';

/** Allows to pause a Subscription */
export interface PauseRequest {
  hold?: AutoResume;
  [key: string]: unknown;
}

export const pauseRequestSchema: Schema<PauseRequest> = expandoObject({
  hold: ['hold', optional(lazy(() => autoResumeSchema))],
});
