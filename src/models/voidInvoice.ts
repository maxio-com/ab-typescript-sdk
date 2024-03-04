/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, Schema, string } from '../schema';

export interface VoidInvoice {
  reason: string;
  [key: string]: unknown;
}

export const voidInvoiceSchema: Schema<VoidInvoice> = expandoObject({
  reason: ['reason', string()],
});
