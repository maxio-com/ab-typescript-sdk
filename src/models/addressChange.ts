/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema';
import { InvoiceAddress, invoiceAddressSchema } from './invoiceAddress';

export interface AddressChange {
  before: InvoiceAddress;
  after: InvoiceAddress;
  [key: string]: unknown;
}

export const addressChangeSchema: Schema<AddressChange> = expandoObject({
  before: ['before', lazy(() => invoiceAddressSchema)],
  after: ['after', lazy(() => invoiceAddressSchema)],
});
