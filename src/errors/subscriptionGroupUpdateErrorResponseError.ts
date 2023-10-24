/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '../core';
import {
  SubscriptionGroupUpdateError,
} from '../models/subscriptionGroupUpdateError';

/**
 * Creates an instance of SubscriptionGroupUpdateErrorResponse
 */
interface SubscriptionGroupUpdateErrorResponse {
  errors?: SubscriptionGroupUpdateError;
}

export class SubscriptionGroupUpdateErrorResponseError extends ApiError<SubscriptionGroupUpdateErrorResponse> {}
