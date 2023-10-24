/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, object, Schema, string } from '../schema';

/** Updatable fields for Subscription Note */
export interface UpdateSubscriptionNote {
  body: string;
  sticky: boolean;
}

export const updateSubscriptionNoteSchema: Schema<UpdateSubscriptionNote> = object(
  { body: ['body', string()], sticky: ['sticky', boolean()] }
);
