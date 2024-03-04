/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema';
import { SubscriptionNote, subscriptionNoteSchema } from './subscriptionNote';

export interface SubscriptionNoteResponse {
  note: SubscriptionNote;
  [key: string]: unknown;
}

export const subscriptionNoteResponseSchema: Schema<SubscriptionNoteResponse> = expandoObject(
  { note: ['note', lazy(() => subscriptionNoteSchema)] }
);
