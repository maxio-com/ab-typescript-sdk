/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, nullable, optional, Schema, string } from '../schema';

export interface OrganizationAddress {
  street?: string | null;
  line2?: string | null;
  city?: string | null;
  state?: string | null;
  zip?: string | null;
  country?: string | null;
  name?: string | null;
  phone?: string | null;
  [key: string]: unknown;
}

export const organizationAddressSchema: Schema<OrganizationAddress> = expandoObject(
  {
    street: ['street', optional(nullable(string()))],
    line2: ['line2', optional(nullable(string()))],
    city: ['city', optional(nullable(string()))],
    state: ['state', optional(nullable(string()))],
    zip: ['zip', optional(nullable(string()))],
    country: ['country', optional(nullable(string()))],
    name: ['name', optional(nullable(string()))],
    phone: ['phone', optional(nullable(string()))],
  }
);
