/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema.js';
import {
  MultiInvoicePayment,
  multiInvoicePaymentSchema,
} from './multiInvoicePayment.js';

export interface MultiInvoicePaymentResponse {
  payment: MultiInvoicePayment;
  [key: string]: unknown;
}

export const multiInvoicePaymentResponseSchema: Schema<MultiInvoicePaymentResponse> = lazy(
  () => expandoObject({ payment: ['payment', multiInvoicePaymentSchema] })
);
