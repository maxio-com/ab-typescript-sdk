/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema.js';
import { InvoiceAddress, invoiceAddressSchema } from './invoiceAddress.js';

export interface AddressChange {
  before: InvoiceAddress;
  after: InvoiceAddress;
  [key: string]: unknown;
}

export const addressChangeSchema: Schema<AddressChange> = lazy(() =>
  expandoObject({
    before: ['before', invoiceAddressSchema],
    after: ['after', invoiceAddressSchema],
  })
);
