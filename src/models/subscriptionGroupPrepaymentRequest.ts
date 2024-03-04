/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema';
import {
  SubscriptionGroupPrepayment,
  subscriptionGroupPrepaymentSchema,
} from './subscriptionGroupPrepayment';

export interface SubscriptionGroupPrepaymentRequest {
  prepayment: SubscriptionGroupPrepayment;
  [key: string]: unknown;
}

export const subscriptionGroupPrepaymentRequestSchema: Schema<SubscriptionGroupPrepaymentRequest> = expandoObject(
  { prepayment: ['prepayment', lazy(() => subscriptionGroupPrepaymentSchema)] }
);
