/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import { InvoiceAddress, invoiceAddressSchema } from './invoiceAddress';

export interface AddressChange {
  before?: InvoiceAddress;
  after?: InvoiceAddress;
}

export const addressChangeSchema: Schema<AddressChange> = object({
  before: ['before', optional(lazy(() => invoiceAddressSchema))],
  after: ['after', optional(lazy(() => invoiceAddressSchema))],
});
