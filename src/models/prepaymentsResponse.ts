/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema } from '../schema';
import {
  PrepaymentPrepaymentsResponse,
  prepaymentPrepaymentsResponseSchema,
} from './prepaymentPrepaymentsResponse';

export interface PrepaymentsResponse {
  prepayments?: PrepaymentPrepaymentsResponse[];
}

export const prepaymentsResponseSchema: Schema<PrepaymentsResponse> = object({
  prepayments: [
    'prepayments',
    optional(array(lazy(() => prepaymentPrepaymentsResponseSchema))),
  ],
});
