/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '../core';
import {
  SubscriptionComponentAllocationErrorItem,
} from '../models/subscriptionComponentAllocationErrorItem';

/**
 * Creates an instance of SubscriptionComponentAllocation
 */
interface SubscriptionComponentAllocation {
  errors?: SubscriptionComponentAllocationErrorItem[];
}

export class SubscriptionComponentAllocationError extends ApiError<SubscriptionComponentAllocation> {}
