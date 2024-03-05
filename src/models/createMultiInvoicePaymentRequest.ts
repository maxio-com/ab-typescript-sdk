/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema';
import {
  CreateMultiInvoicePayment,
  createMultiInvoicePaymentSchema,
} from './createMultiInvoicePayment';

export interface CreateMultiInvoicePaymentRequest {
  payment: CreateMultiInvoicePayment;
  [key: string]: unknown;
}

export const createMultiInvoicePaymentRequestSchema: Schema<CreateMultiInvoicePaymentRequest> = expandoObject(
  { payment: ['payment', lazy(() => createMultiInvoicePaymentSchema)] }
);
