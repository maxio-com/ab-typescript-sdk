/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '../core.js';

/**
 * Creates an instance of EventBasedBillingSegmentWriteErrorResponse
 */
interface EventBasedBillingSegmentWriteErrorResponse {
  errors?: Record<string, unknown>;
  [key: string]: unknown;
}

export class EventBasedBillingSegmentWriteErrorResponseError extends ApiError<
  EventBasedBillingSegmentWriteErrorResponse
> {}
