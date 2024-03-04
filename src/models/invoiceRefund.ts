/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  expandoObject,
  nullable,
  number,
  optional,
  Schema,
  string,
} from '../schema';

export interface InvoiceRefund {
  transactionId?: number;
  paymentId?: number;
  memo?: string;
  originalAmount?: string;
  appliedAmount?: string;
  /** The transaction ID for the refund as returned from the payment gateway */
  gatewayTransactionId?: string | null;
  gatewayUsed?: string;
  gatewayHandle?: string | null;
  [key: string]: unknown;
}

export const invoiceRefundSchema: Schema<InvoiceRefund> = expandoObject({
  transactionId: ['transaction_id', optional(number())],
  paymentId: ['payment_id', optional(number())],
  memo: ['memo', optional(string())],
  originalAmount: ['original_amount', optional(string())],
  appliedAmount: ['applied_amount', optional(string())],
  gatewayTransactionId: [
    'gateway_transaction_id',
    optional(nullable(string())),
  ],
  gatewayUsed: ['gateway_used', optional(string())],
  gatewayHandle: ['gateway_handle', optional(nullable(string()))],
});
