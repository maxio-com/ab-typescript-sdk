/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { dict, object, optional, Schema, unknown } from '../schema';

export interface EventBasedBillingSegmentError {
  /** The key of the object would be a number (an index in the request array) where the error occurred. In the value object, the key represents the field and the value is an array with error messages. In most cases, this object would contain just one key. */
  segments?: Record<string, unknown>;
}

export const eventBasedBillingSegmentErrorSchema: Schema<EventBasedBillingSegmentError> = object(
  { segments: ['segments', optional(dict(unknown()))] }
);
