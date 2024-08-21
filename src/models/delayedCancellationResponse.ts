/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, optional, Schema, string } from '../schema';

export interface DelayedCancellationResponse {
  message?: string;
  [key: string]: unknown;
}

export const delayedCancellationResponseSchema: Schema<DelayedCancellationResponse> = expandoObject(
  { message: ['message', optional(string())] }
);
