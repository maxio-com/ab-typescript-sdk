/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '../core';

/**
 * Creates an instance of EventBasedBillingSegmentErrors
 */
interface EventBasedBillingSegmentErrors {
  /** The key of the object would be a number (an index in the request array) where the error occurred. In the value object, the key represents the field and the value is an array with error messages. In most cases, this object would contain just one key. */
  errors?: Record<string, unknown>;
}

export class EventBasedBillingSegmentErrorsError extends ApiError<EventBasedBillingSegmentErrors> {}
