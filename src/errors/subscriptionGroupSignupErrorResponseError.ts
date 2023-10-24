/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '../core';
import {
  SubscriptionGroupSignupError,
} from '../models/subscriptionGroupSignupError';

/**
 * Creates an instance of SubscriptionGroupSignupErrorResponse
 */
interface SubscriptionGroupSignupErrorResponse {
  errors: SubscriptionGroupSignupError;
}

export class SubscriptionGroupSignupErrorResponseError extends ApiError<SubscriptionGroupSignupErrorResponse> {}
