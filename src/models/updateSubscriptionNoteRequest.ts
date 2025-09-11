/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema.js';
import {
  UpdateSubscriptionNote,
  updateSubscriptionNoteSchema,
} from './updateSubscriptionNote.js';

/** Updatable fields for Subscription Note */
export interface UpdateSubscriptionNoteRequest {
  /** Updatable fields for Subscription Note */
  note: UpdateSubscriptionNote;
  [key: string]: unknown;
}

export const updateSubscriptionNoteRequestSchema: Schema<UpdateSubscriptionNoteRequest> = expandoObject(
  { note: ['note', lazy(() => updateSubscriptionNoteSchema)] }
);
