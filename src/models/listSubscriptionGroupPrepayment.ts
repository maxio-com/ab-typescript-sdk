/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema.js';
import {
  ListSubscriptionGroupPrepaymentItem,
  listSubscriptionGroupPrepaymentItemSchema,
} from './listSubscriptionGroupPrepaymentItem.js';

export interface ListSubscriptionGroupPrepayment {
  prepayment: ListSubscriptionGroupPrepaymentItem;
  [key: string]: unknown;
}

export const listSubscriptionGroupPrepaymentSchema: Schema<ListSubscriptionGroupPrepayment> = lazy(
  () =>
    expandoObject({
      prepayment: ['prepayment', listSubscriptionGroupPrepaymentItemSchema],
    })
);
