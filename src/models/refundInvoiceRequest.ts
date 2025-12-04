/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema.js';
import {
  RefundInvoiceRequestRefund,
  refundInvoiceRequestRefundSchema,
} from './containers/refundInvoiceRequestRefund.js';

export interface RefundInvoiceRequest {
  refund: RefundInvoiceRequestRefund;
  [key: string]: unknown;
}

export const refundInvoiceRequestSchema: Schema<RefundInvoiceRequest> = lazy(
  () => expandoObject({ refund: ['refund', refundInvoiceRequestRefundSchema] })
);
