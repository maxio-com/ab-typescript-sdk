/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface OriginInvoice {
  /** The UID of the invoice serving as an origin invoice. */
  uid?: string;
  /** The number of the invoice serving as an origin invoice. */
  number?: string;
}

export const originInvoiceSchema: Schema<OriginInvoice> = object({
  uid: ['uid', optional(string())],
  number: ['number', optional(string())],
});
