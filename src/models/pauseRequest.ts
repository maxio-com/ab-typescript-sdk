/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import { AutoResume, autoResumeSchema } from './autoResume';

/** Allows to pause a Subscription */
export interface PauseRequest {
  hold?: AutoResume;
}

export const pauseRequestSchema: Schema<PauseRequest> = object({
  hold: ['hold', optional(lazy(() => autoResumeSchema))],
});
