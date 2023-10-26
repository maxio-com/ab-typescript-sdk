/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, nullable, object, optional, Schema, string } from '../schema';
import { InvoiceAddress, invoiceAddressSchema } from './invoiceAddress';

export interface Seller {
  name?: string;
  address?: InvoiceAddress;
  phone?: string;
  logoUrl?: string | null;
}

export const sellerSchema: Schema<Seller> = object({
  name: ['name', optional(string())],
  address: ['address', optional(lazy(() => invoiceAddressSchema))],
  phone: ['phone', optional(string())],
  logoUrl: ['logo_url', optional(nullable(string()))],
});
