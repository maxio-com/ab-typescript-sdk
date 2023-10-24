/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema } from '../schema';
import {
  CreateMultiInvoicePayment,
  createMultiInvoicePaymentSchema,
} from './createMultiInvoicePayment';

export interface CreateMultiInvoicePaymentRequest {
  payment: CreateMultiInvoicePayment;
}

export const createMultiInvoicePaymentRequestSchema: Schema<CreateMultiInvoicePaymentRequest> = object(
  { payment: ['payment', lazy(() => createMultiInvoicePaymentSchema)] }
);
