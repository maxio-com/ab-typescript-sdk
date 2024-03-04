/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, expandoObject, lazy, Schema } from '../schema';
import {
  ListSubscriptionGroupPrepayment,
  listSubscriptionGroupPrepaymentSchema,
} from './listSubscriptionGroupPrepayment';

export interface ListSubscriptionGroupPrepaymentResponse {
  prepayments: ListSubscriptionGroupPrepayment[];
  [key: string]: unknown;
}

export const listSubscriptionGroupPrepaymentResponseSchema: Schema<ListSubscriptionGroupPrepaymentResponse> = expandoObject(
  {
    prepayments: [
      'prepayments',
      array(lazy(() => listSubscriptionGroupPrepaymentSchema)),
    ],
  }
);
