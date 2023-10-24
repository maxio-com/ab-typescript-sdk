/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '../core';
import { Errors } from '../models/errors';

/**
 * Creates an instance of EventBasedBillingListSegmentsErrors
 */
interface EventBasedBillingListSegmentsErrors {
  errors?: Errors;
}

export class EventBasedBillingListSegmentsErrorsError extends ApiError<EventBasedBillingListSegmentsErrors> {}
