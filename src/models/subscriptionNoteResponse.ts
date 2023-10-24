/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema } from '../schema';
import { SubscriptionNote, subscriptionNoteSchema } from './subscriptionNote';

export interface SubscriptionNoteResponse {
  note: SubscriptionNote;
}

export const subscriptionNoteResponseSchema: Schema<SubscriptionNoteResponse> = object(
  { note: ['note', lazy(() => subscriptionNoteSchema)] }
);
