/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface DelayedCancellationResponse {
  message?: string;
}

export const delayedCancellationResponseSchema: Schema<DelayedCancellationResponse> = object(
  { message: ['message', optional(string())] }
);
