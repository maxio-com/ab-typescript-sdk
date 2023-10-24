/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema } from '../schema';
import {
  UpdateSubscriptionNote,
  updateSubscriptionNoteSchema,
} from './updateSubscriptionNote';

/** Updatable fields for Subscription Note */
export interface UpdateSubscriptionNoteRequest {
  /** Updatable fields for Subscription Note */
  note: UpdateSubscriptionNote;
}

export const updateSubscriptionNoteRequestSchema: Schema<UpdateSubscriptionNoteRequest> = object(
  { note: ['note', lazy(() => updateSubscriptionNoteSchema)] }
);
