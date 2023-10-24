/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';

export interface VoidInvoice {
  reason: string;
}

export const voidInvoiceSchema: Schema<VoidInvoice> = object({
  reason: ['reason', string()],
});
