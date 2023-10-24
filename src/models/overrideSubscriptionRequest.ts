/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema } from '../schema';
import {
  OverrideSubscription,
  overrideSubscriptionSchema,
} from './overrideSubscription';

export interface OverrideSubscriptionRequest {
  subscription: OverrideSubscription;
}

export const overrideSubscriptionRequestSchema: Schema<OverrideSubscriptionRequest> = object(
  { subscription: ['subscription', lazy(() => overrideSubscriptionSchema)] }
);
