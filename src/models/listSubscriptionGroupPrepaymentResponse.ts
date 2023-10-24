/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, Schema } from '../schema';
import {
  ListSubscriptionGroupPrepayment,
  listSubscriptionGroupPrepaymentSchema,
} from './listSubscriptionGroupPrepayment';

export interface ListSubscriptionGroupPrepaymentResponse {
  prepayments: ListSubscriptionGroupPrepayment[];
}

export const listSubscriptionGroupPrepaymentResponseSchema: Schema<ListSubscriptionGroupPrepaymentResponse> = object(
  {
    prepayments: [
      'prepayments',
      array(lazy(() => listSubscriptionGroupPrepaymentSchema)),
    ],
  }
);
