/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { dict, object, optional, Schema, string } from '../schema';

export interface PayerAttributes {
  firstName?: string;
  lastName?: string;
  email?: string;
  ccEmails?: string;
  organization?: string;
  reference?: string;
  address?: string;
  address2?: string;
  city?: string;
  state?: string;
  zip?: string;
  country?: string;
  phone?: string;
  locale?: string;
  vatNumber?: string;
  taxExempt?: string;
  taxExemptReason?: string;
  /** (Optional) A set of key/value pairs representing custom fields and their values. Metafields will be created “on-the-fly” in your site for a given key, if they have not been created yet. */
  metafields?: Record<string, string>;
}

export const payerAttributesSchema: Schema<PayerAttributes> = object({
  firstName: ['first_name', optional(string())],
  lastName: ['last_name', optional(string())],
  email: ['email', optional(string())],
  ccEmails: ['cc_emails', optional(string())],
  organization: ['organization', optional(string())],
  reference: ['reference', optional(string())],
  address: ['address', optional(string())],
  address2: ['address_2', optional(string())],
  city: ['city', optional(string())],
  state: ['state', optional(string())],
  zip: ['zip', optional(string())],
  country: ['country', optional(string())],
  phone: ['phone', optional(string())],
  locale: ['locale', optional(string())],
  vatNumber: ['vat_number', optional(string())],
  taxExempt: ['tax_exempt', optional(string())],
  taxExemptReason: ['tax_exempt_reason', optional(string())],
  metafields: ['metafields', optional(dict(string()))],
});
