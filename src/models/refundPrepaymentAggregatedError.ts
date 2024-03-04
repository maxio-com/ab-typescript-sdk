/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, optional, Schema } from '../schema';
import {
  PrepaymentAggregatedError,
  prepaymentAggregatedErrorSchema,
} from './prepaymentAggregatedError';

export interface RefundPrepaymentAggregatedError {
  refund?: PrepaymentAggregatedError;
  [key: string]: unknown;
}

export const refundPrepaymentAggregatedErrorSchema: Schema<RefundPrepaymentAggregatedError> = expandoObject(
  { refund: ['refund', optional(lazy(() => prepaymentAggregatedErrorSchema))] }
);
