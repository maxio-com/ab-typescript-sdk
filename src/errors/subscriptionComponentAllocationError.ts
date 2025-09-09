/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '../core.js';
import { SubscriptionComponentAllocationErrorItem } from '../models/subscriptionComponentAllocationErrorItem.js';

/**
 * Creates an instance of SubscriptionComponentAllocation
 */
interface SubscriptionComponentAllocation {
  errors?: SubscriptionComponentAllocationErrorItem[];
  [key: string]: unknown;
}

export class SubscriptionComponentAllocationError extends ApiError<
  SubscriptionComponentAllocation
> {}
