/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema } from '../schema';
import { RefundPrepayment, refundPrepaymentSchema } from './refundPrepayment';

export interface RefundPrepaymentRequest {
  refund: RefundPrepayment;
}

export const refundPrepaymentRequestSchema: Schema<RefundPrepaymentRequest> = object(
  { refund: ['refund', lazy(() => refundPrepaymentSchema)] }
);
