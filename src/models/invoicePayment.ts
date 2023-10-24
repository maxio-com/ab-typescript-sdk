/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  boolean,
  lazy,
  nullable,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import {
  InvoicePaymentMethod,
  invoicePaymentMethodSchema,
} from './invoicePaymentMethod';

export interface InvoicePayment {
  transactionTime?: string;
  memo?: string;
  originalAmount?: string;
  appliedAmount?: string;
  paymentMethod?: InvoicePaymentMethod;
  transactionId?: number;
  prepayment?: boolean;
  gatewayHandle?: string | null;
  gatewayUsed?: string;
  /** The transaction ID for the payment as returned from the payment gateway */
  gatewayTransactionId?: string | null;
}

export const invoicePaymentSchema: Schema<InvoicePayment> = object({
  transactionTime: ['transaction_time', optional(string())],
  memo: ['memo', optional(string())],
  originalAmount: ['original_amount', optional(string())],
  appliedAmount: ['applied_amount', optional(string())],
  paymentMethod: [
    'payment_method',
    optional(lazy(() => invoicePaymentMethodSchema)),
  ],
  transactionId: ['transaction_id', optional(number())],
  prepayment: ['prepayment', optional(boolean())],
  gatewayHandle: ['gateway_handle', optional(nullable(string()))],
  gatewayUsed: ['gateway_used', optional(string())],
  gatewayTransactionId: [
    'gateway_transaction_id',
    optional(nullable(string())),
  ],
});
