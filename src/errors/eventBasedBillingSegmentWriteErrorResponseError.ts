/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '../core.js';
import { EventBasedBillingSegmentSingleError } from '../models/eventBasedBillingSegmentSingleError.js';

/**
 * Creates an instance of EventBasedBillingSegmentWriteErrorResponse
 */
interface EventBasedBillingSegmentWriteErrorResponse {
  /** The key of the object would be a number (an index in the request array) where the error occurred. In the value object, the key represents the field and the value is an array with error messages. In most cases, this object would contain just one key. */
  errors?: EventBasedBillingSegmentSingleError;
  [key: string]: unknown;
}

export class EventBasedBillingSegmentWriteErrorResponseError extends ApiError<
  EventBasedBillingSegmentWriteErrorResponse
> {}
