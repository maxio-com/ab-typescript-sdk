/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';

export interface PendingCancellationChange {
  cancellationState: string;
  cancelsAt: string;
}

export const pendingCancellationChangeSchema: Schema<PendingCancellationChange> = object(
  {
    cancellationState: ['cancellation_state', string()],
    cancelsAt: ['cancels_at', string()],
  }
);
