/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema';
import { RefundPrepayment, refundPrepaymentSchema } from './refundPrepayment';

export interface RefundPrepaymentRequest {
  refund: RefundPrepayment;
  [key: string]: unknown;
}

export const refundPrepaymentRequestSchema: Schema<RefundPrepaymentRequest> = expandoObject(
  { refund: ['refund', lazy(() => refundPrepaymentSchema)] }
);
