/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

/** Example schema for an `change_invoice_collection_method` event */
export interface ChangeInvoiceCollectionMethodEventData {
  /** The previous collection method of the invoice. */
  fromCollectionMethod?: string;
  /** The new collection method of the invoice. */
  toCollectionMethod?: string;
}

export const changeInvoiceCollectionMethodEventDataSchema: Schema<ChangeInvoiceCollectionMethodEventData> = object(
  {
    fromCollectionMethod: ['from_collection_method', optional(string())],
    toCollectionMethod: ['to_collection_method', optional(string())],
  }
);
