/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

/** Overrides the default address. */
export interface CreateInvoiceAddress {
  firstName?: string;
  lastName?: string;
  phone?: string;
  address?: string;
  address2?: string;
  city?: string;
  state?: string;
  zip?: string;
  country?: string;
}

export const createInvoiceAddressSchema: Schema<CreateInvoiceAddress> = object({
  firstName: ['first_name', optional(string())],
  lastName: ['last_name', optional(string())],
  phone: ['phone', optional(string())],
  address: ['address', optional(string())],
  address2: ['address_2', optional(string())],
  city: ['city', optional(string())],
  state: ['state', optional(string())],
  zip: ['zip', optional(string())],
  country: ['country', optional(string())],
});
