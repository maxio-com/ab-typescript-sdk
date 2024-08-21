/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  expandoObject,
  lazy,
  number,
  optional,
  Schema,
  string,
} from '../schema';
import {
  InvoicePaymentApplication,
  invoicePaymentApplicationSchema,
} from './invoicePaymentApplication';

export interface MultiInvoicePayment {
  /** The numeric ID of the transaction. */
  transactionId?: number;
  /** Dollar amount of the sum of the paid invoices. */
  totalAmount?: string;
  /** The ISO 4217 currency code (3 character string) representing the currency of invoice transaction. */
  currencyCode?: string;
  applications?: InvoicePaymentApplication[];
  [key: string]: unknown;
}

export const multiInvoicePaymentSchema: Schema<MultiInvoicePayment> = expandoObject(
  {
    transactionId: ['transaction_id', optional(number())],
    totalAmount: ['total_amount', optional(string())],
    currencyCode: ['currency_code', optional(string())],
    applications: [
      'applications',
      optional(array(lazy(() => invoicePaymentApplicationSchema))),
    ],
  }
);
