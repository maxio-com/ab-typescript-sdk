/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '../core.js';
import { SubscriptionGroupSignupError } from '../models/subscriptionGroupSignupError.js';

/**
 * Creates an instance of SubscriptionGroupSignupErrorResponse
 */
interface SubscriptionGroupSignupErrorResponse {
  errors: SubscriptionGroupSignupError;
  [key: string]: unknown;
}

export class SubscriptionGroupSignupErrorResponseError extends ApiError<
  SubscriptionGroupSignupErrorResponse
> {}
