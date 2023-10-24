/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema } from '../schema';
import { CreateInvoice, createInvoiceSchema } from './createInvoice';

export interface CreateInvoiceRequest {
  invoice: CreateInvoice;
}

export const createInvoiceRequestSchema: Schema<CreateInvoiceRequest> = object({
  invoice: ['invoice', lazy(() => createInvoiceSchema)],
});
