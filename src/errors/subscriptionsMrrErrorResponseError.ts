/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '../core';
import { AttributeError } from '../models/attributeError';

/**
 * Creates an instance of SubscriptionsMrrErrorResponse
 */
interface SubscriptionsMrrErrorResponse {
  errors: AttributeError;
}

export class SubscriptionsMrrErrorResponseError extends ApiError<SubscriptionsMrrErrorResponse> {}
