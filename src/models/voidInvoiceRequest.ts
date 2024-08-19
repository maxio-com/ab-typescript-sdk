/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema';
import { VoidInvoice, voidInvoiceSchema } from './voidInvoice';

export interface VoidInvoiceRequest {
  mVoid: VoidInvoice;
  [key: string]: unknown;
}

export const voidInvoiceRequestSchema: Schema<VoidInvoiceRequest> = expandoObject(
  { mVoid: ['void', lazy(() => voidInvoiceSchema)] }
);
