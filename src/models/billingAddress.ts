/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { nullable, object, optional, Schema, string } from '../schema';

export interface BillingAddress {
  street?: string | null;
  line2?: string | null;
  city?: string | null;
  state?: string | null;
  zip?: string | null;
  country?: string | null;
}

export const billingAddressSchema: Schema<BillingAddress> = object({
  street: ['street', optional(nullable(string()))],
  line2: ['line2', optional(nullable(string()))],
  city: ['city', optional(nullable(string()))],
  state: ['state', optional(nullable(string()))],
  zip: ['zip', optional(nullable(string()))],
  country: ['country', optional(nullable(string()))],
});
