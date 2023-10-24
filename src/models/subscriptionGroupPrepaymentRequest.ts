/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema } from '../schema';
import {
  SubscriptionGroupPrepayment,
  subscriptionGroupPrepaymentSchema,
} from './subscriptionGroupPrepayment';

export interface SubscriptionGroupPrepaymentRequest {
  prepayment: SubscriptionGroupPrepayment;
}

export const subscriptionGroupPrepaymentRequestSchema: Schema<SubscriptionGroupPrepaymentRequest> = object(
  { prepayment: ['prepayment', lazy(() => subscriptionGroupPrepaymentSchema)] }
);
