/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, optional, Schema } from '../schema';
import { BaseRefundError, baseRefundErrorSchema } from './baseRefundError';

export interface RefundPrepaymentBaseRefundError {
  refund?: BaseRefundError;
  [key: string]: unknown;
}

export const refundPrepaymentBaseRefundErrorSchema: Schema<RefundPrepaymentBaseRefundError> = expandoObject(
  { refund: ['refund', optional(lazy(() => baseRefundErrorSchema))] }
);
