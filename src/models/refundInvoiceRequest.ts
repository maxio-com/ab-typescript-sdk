/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, Schema } from '../schema';
import {
  RefundInvoiceRequestRefund,
  refundInvoiceRequestRefundSchema,
} from './containers/refundInvoiceRequestRefund';

export interface RefundInvoiceRequest {
  refund: RefundInvoiceRequestRefund;
  [key: string]: unknown;
}

export const refundInvoiceRequestSchema: Schema<RefundInvoiceRequest> = expandoObject(
  { refund: ['refund', refundInvoiceRequestRefundSchema] }
);
