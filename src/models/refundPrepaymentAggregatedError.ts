/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import {
  PrepaymentAggregatedError,
  prepaymentAggregatedErrorSchema,
} from './prepaymentAggregatedError';

export interface RefundPrepaymentAggregatedError {
  refund?: PrepaymentAggregatedError;
}

export const refundPrepaymentAggregatedErrorSchema: Schema<RefundPrepaymentAggregatedError> = object(
  { refund: ['refund', optional(lazy(() => prepaymentAggregatedErrorSchema))] }
);
