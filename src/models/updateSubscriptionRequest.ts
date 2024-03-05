/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema';
import {
  UpdateSubscription,
  updateSubscriptionSchema,
} from './updateSubscription';

export interface UpdateSubscriptionRequest {
  subscription: UpdateSubscription;
  [key: string]: unknown;
}

export const updateSubscriptionRequestSchema: Schema<UpdateSubscriptionRequest> = expandoObject(
  { subscription: ['subscription', lazy(() => updateSubscriptionSchema)] }
);
