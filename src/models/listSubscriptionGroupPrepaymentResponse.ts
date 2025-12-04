/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, expandoObject, lazy, Schema } from '../schema.js';
import {
  ListSubscriptionGroupPrepayment,
  listSubscriptionGroupPrepaymentSchema,
} from './listSubscriptionGroupPrepayment.js';

export interface ListSubscriptionGroupPrepaymentResponse {
  prepayments: ListSubscriptionGroupPrepayment[];
  [key: string]: unknown;
}

export const listSubscriptionGroupPrepaymentResponseSchema: Schema<ListSubscriptionGroupPrepaymentResponse> = lazy(
  () =>
    expandoObject({
      prepayments: [
        'prepayments',
        array(listSubscriptionGroupPrepaymentSchema),
      ],
    })
);
