/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '../core.js';
import { Errors1 } from '../models/errors1.js';

/**
 * Creates an instance of EventBasedBillingListSegmentsErrors
 */
interface EventBasedBillingListSegmentsErrors {
  errors?: Errors1;
  [key: string]: unknown;
}

export class EventBasedBillingListSegmentsErrorsError extends ApiError<
  EventBasedBillingListSegmentsErrors
> {}
