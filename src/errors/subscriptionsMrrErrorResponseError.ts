/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '../core.js';
import { AttributeError } from '../models/attributeError.js';

/**
 * Creates an instance of SubscriptionsMrrErrorResponse
 */
interface SubscriptionsMrrErrorResponse {
  errors: AttributeError;
  [key: string]: unknown;
}

export class SubscriptionsMrrErrorResponseError extends ApiError<
  SubscriptionsMrrErrorResponse
> {}
