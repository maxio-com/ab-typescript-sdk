/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema } from '../schema';
import {
  ListSubcriptionGroupPrepaymentItem,
  listSubcriptionGroupPrepaymentItemSchema,
} from './listSubcriptionGroupPrepaymentItem';

export interface ListSubscriptionGroupPrepayment {
  prepayment: ListSubcriptionGroupPrepaymentItem;
}

export const listSubscriptionGroupPrepaymentSchema: Schema<ListSubscriptionGroupPrepayment> = object(
  {
    prepayment: [
      'prepayment',
      lazy(() => listSubcriptionGroupPrepaymentItemSchema),
    ],
  }
);
