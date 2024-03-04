/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema';
import {
  MultiInvoicePayment,
  multiInvoicePaymentSchema,
} from './multiInvoicePayment';

export interface MultiInvoicePaymentResponse {
  payment: MultiInvoicePayment;
  [key: string]: unknown;
}

export const multiInvoicePaymentResponseSchema: Schema<MultiInvoicePaymentResponse> = expandoObject(
  { payment: ['payment', lazy(() => multiInvoicePaymentSchema)] }
);
