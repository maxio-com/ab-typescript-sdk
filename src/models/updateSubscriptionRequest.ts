/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema } from '../schema';
import {
  UpdateSubscription,
  updateSubscriptionSchema,
} from './updateSubscription';

export interface UpdateSubscriptionRequest {
  subscription: UpdateSubscription;
}

export const updateSubscriptionRequestSchema: Schema<UpdateSubscriptionRequest> = object(
  { subscription: ['subscription', lazy(() => updateSubscriptionSchema)] }
);
