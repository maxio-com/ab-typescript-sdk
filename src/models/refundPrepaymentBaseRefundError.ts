/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import { BaseRefundError, baseRefundErrorSchema } from './baseRefundError';

export interface RefundPrepaymentBaseRefundError {
  refund?: BaseRefundError;
}

export const refundPrepaymentBaseRefundErrorSchema: Schema<RefundPrepaymentBaseRefundError> = object(
  { refund: ['refund', optional(lazy(() => baseRefundErrorSchema))] }
);
