/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '../core';
import { Subscription } from '../models/subscription';

/**
 * Creates an instance of SubscriptionResponse
 */
interface SubscriptionResponse {
  subscription?: Subscription;
  [key: string]: unknown;
}

export class SubscriptionResponseError extends ApiError<SubscriptionResponse> {}
