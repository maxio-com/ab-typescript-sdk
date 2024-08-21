/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema';
import { CreateInvoice, createInvoiceSchema } from './createInvoice';

export interface CreateInvoiceRequest {
  invoice: CreateInvoice;
  [key: string]: unknown;
}

export const createInvoiceRequestSchema: Schema<CreateInvoiceRequest> = expandoObject(
  { invoice: ['invoice', lazy(() => createInvoiceSchema)] }
);
