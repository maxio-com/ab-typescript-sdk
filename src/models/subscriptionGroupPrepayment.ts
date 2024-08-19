/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, number, Schema, string } from '../schema';
import {
  SubscriptionGroupPrepaymentMethod,
  subscriptionGroupPrepaymentMethodSchema,
} from './subscriptionGroupPrepaymentMethod';

export interface SubscriptionGroupPrepayment {
  amount: number;
  details: string;
  memo: string;
  method: SubscriptionGroupPrepaymentMethod;
  [key: string]: unknown;
}

export const subscriptionGroupPrepaymentSchema: Schema<SubscriptionGroupPrepayment> = expandoObject(
  {
    amount: ['amount', number()],
    details: ['details', string()],
    memo: ['memo', string()],
    method: ['method', subscriptionGroupPrepaymentMethodSchema],
  }
);
