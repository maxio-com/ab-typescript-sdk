/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema';
import {
  OverrideSubscription,
  overrideSubscriptionSchema,
} from './overrideSubscription';

export interface OverrideSubscriptionRequest {
  subscription: OverrideSubscription;
  [key: string]: unknown;
}

export const overrideSubscriptionRequestSchema: Schema<OverrideSubscriptionRequest> = expandoObject(
  { subscription: ['subscription', lazy(() => overrideSubscriptionSchema)] }
);
