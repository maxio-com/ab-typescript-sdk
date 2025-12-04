/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema.js';
import {
  SubscriptionNote,
  subscriptionNoteSchema,
} from './subscriptionNote.js';

export interface SubscriptionNoteResponse {
  note: SubscriptionNote;
  [key: string]: unknown;
}

export const subscriptionNoteResponseSchema: Schema<SubscriptionNoteResponse> = lazy(
  () => expandoObject({ note: ['note', subscriptionNoteSchema] })
);
