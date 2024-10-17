/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, number, optional, Schema, string } from '../schema';
import {
  CreateInvoicePaymentAmount,
  createInvoicePaymentAmountSchema,
} from './containers/createInvoicePaymentAmount';
import {
  InvoicePaymentMethodType,
  invoicePaymentMethodTypeSchema,
} from './invoicePaymentMethodType';

export interface CreateInvoicePayment {
  /** A string of the dollar amount to be refunded (eg. "10.50" => $10.50) */
  amount?: CreateInvoicePaymentAmount;
  /** A description to be attached to the payment. Applicable only to `external` payments. */
  memo?: string;
  /** The type of payment method used. Defaults to other. */
  method?: InvoicePaymentMethodType;
  /** Additional information related to the payment method (eg. Check #). Applicable only to `external` payments. */
  details?: string;
  /** The ID of the payment profile to be used for the payment. */
  paymentProfileId?: number;
  /**
   * Date reflecting when the payment was received from a customer. Must be in the past. Applicable only to
   * `external` payments.
   */
  receivedOn?: string;
  [key: string]: unknown;
}

export const createInvoicePaymentSchema: Schema<CreateInvoicePayment> = expandoObject(
  {
    amount: ['amount', optional(createInvoicePaymentAmountSchema)],
    memo: ['memo', optional(string())],
    method: ['method', optional(invoicePaymentMethodTypeSchema)],
    details: ['details', optional(string())],
    paymentProfileId: ['payment_profile_id', optional(number())],
    receivedOn: ['received_on', optional(string())],
  }
);
