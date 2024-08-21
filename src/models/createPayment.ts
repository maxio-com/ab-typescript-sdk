/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, Schema, string } from '../schema';
import {
  InvoicePaymentMethodType,
  invoicePaymentMethodTypeSchema,
} from './invoicePaymentMethodType';

export interface CreatePayment {
  amount: string;
  memo: string;
  paymentDetails: string;
  /** The type of payment method used. Defaults to other. */
  paymentMethod: InvoicePaymentMethodType;
  [key: string]: unknown;
}

export const createPaymentSchema: Schema<CreatePayment> = expandoObject({
  amount: ['amount', string()],
  memo: ['memo', string()],
  paymentDetails: ['payment_details', string()],
  paymentMethod: ['payment_method', invoicePaymentMethodTypeSchema],
});
