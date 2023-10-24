/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema } from '../schema';
import {
  CreateSubscription,
  createSubscriptionSchema,
} from './createSubscription';

export interface CreateSubscriptionRequest {
  subscription: CreateSubscription;
}

export const createSubscriptionRequestSchema: Schema<CreateSubscriptionRequest> = object(
  { subscription: ['subscription', lazy(() => createSubscriptionSchema)] }
);
