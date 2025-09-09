/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '../core.js';
import { SubscriptionGroupCreateErrorResponseErrors } from '../models/containers/subscriptionGroupCreateErrorResponseErrors.js';

/**
 * Creates an instance of SubscriptionGroupCreateErrorResponse
 */
interface SubscriptionGroupCreateErrorResponse {
  errors: SubscriptionGroupCreateErrorResponseErrors;
  [key: string]: unknown;
}

export class SubscriptionGroupCreateErrorResponseError extends ApiError<
  SubscriptionGroupCreateErrorResponse
> {}
