/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '../core.js';
import { SubscriptionGroupUpdateError } from '../models/subscriptionGroupUpdateError.js';

/**
 * Creates an instance of SubscriptionGroupUpdateErrorResponse
 */
interface SubscriptionGroupUpdateErrorResponse {
  errors?: SubscriptionGroupUpdateError;
  [key: string]: unknown;
}

export class SubscriptionGroupUpdateErrorResponseError extends ApiError<
  SubscriptionGroupUpdateErrorResponse
> {}
