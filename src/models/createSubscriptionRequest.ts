/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema';
import {
  CreateSubscription,
  createSubscriptionSchema,
} from './createSubscription';

export interface CreateSubscriptionRequest {
  subscription: CreateSubscription;
  [key: string]: unknown;
}

export const createSubscriptionRequestSchema: Schema<CreateSubscriptionRequest> = expandoObject(
  { subscription: ['subscription', lazy(() => createSubscriptionSchema)] }
);
