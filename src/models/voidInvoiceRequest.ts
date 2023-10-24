/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema } from '../schema';
import { VoidInvoice, voidInvoiceSchema } from './voidInvoice';

export interface VoidInvoiceRequest {
  mVoid: VoidInvoice;
}

export const voidInvoiceRequestSchema: Schema<VoidInvoiceRequest> = object({
  mVoid: ['void', lazy(() => voidInvoiceSchema)],
});
