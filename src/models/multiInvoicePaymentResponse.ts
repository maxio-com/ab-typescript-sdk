/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema } from '../schema';
import {
  MultiInvoicePayment,
  multiInvoicePaymentSchema,
} from './multiInvoicePayment';

export interface MultiInvoicePaymentResponse {
  payment: MultiInvoicePayment;
}

export const multiInvoicePaymentResponseSchema: Schema<MultiInvoicePaymentResponse> = object(
  { payment: ['payment', lazy(() => multiInvoicePaymentSchema)] }
);
