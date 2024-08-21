/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, Schema, string } from '../schema';

export interface PendingCancellationChange {
  cancellationState: string;
  cancelsAt: string;
  [key: string]: unknown;
}

export const pendingCancellationChangeSchema: Schema<PendingCancellationChange> = expandoObject(
  {
    cancellationState: ['cancellation_state', string()],
    cancelsAt: ['cancels_at', string()],
  }
);
