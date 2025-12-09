/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  expandoObject,
  lazy,
  nullable,
  optional,
  Schema,
  string,
} from '../schema.js';
import { InvoiceAddress, invoiceAddressSchema } from './invoiceAddress.js';

/** Information about the seller (merchant) listed on the masthead of the invoice. */
export interface InvoiceSeller {
  name?: string;
  address?: InvoiceAddress;
  phone?: string;
  logoUrl?: string | null;
  [key: string]: unknown;
}

export const invoiceSellerSchema: Schema<InvoiceSeller> = lazy(() =>
  expandoObject({
    name: ['name', optional(string())],
    address: ['address', optional(invoiceAddressSchema)],
    phone: ['phone', optional(string())],
    logoUrl: ['logo_url', optional(nullable(string()))],
  })
);
