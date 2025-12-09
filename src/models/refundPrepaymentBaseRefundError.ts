/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, optional, Schema } from '../schema.js';
import { BaseRefundError, baseRefundErrorSchema } from './baseRefundError.js';

export interface RefundPrepaymentBaseRefundError {
  refund?: BaseRefundError;
  [key: string]: unknown;
}

export const refundPrepaymentBaseRefundErrorSchema: Schema<RefundPrepaymentBaseRefundError> = lazy(
  () => expandoObject({ refund: ['refund', optional(baseRefundErrorSchema)] })
);
