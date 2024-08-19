/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, expandoObject, Schema, string } from '../schema';

/** Updatable fields for Subscription Note */
export interface UpdateSubscriptionNote {
  body: string;
  sticky: boolean;
  [key: string]: unknown;
}

export const updateSubscriptionNoteSchema: Schema<UpdateSubscriptionNote> = expandoObject(
  { body: ['body', string()], sticky: ['sticky', boolean()] }
);
