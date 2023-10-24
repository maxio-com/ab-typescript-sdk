/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  boolean,
  nullable,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';

export interface CreateCustomer {
  firstName: string;
  lastName: string;
  email: string;
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
  /** Set a specific language on a customer record. */
  locale?: string;
  vatNumber?: string;
  taxExempt?: boolean;
  taxExemptReason?: string;
  /** The parent ID in Chargify if applicable. Parent is another Customer object. */
  parentId?: number | null;
}

export const createCustomerSchema: Schema<CreateCustomer> = object({
  firstName: ['first_name', string()],
  lastName: ['last_name', string()],
  email: ['email', string()],
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
  taxExempt: ['tax_exempt', optional(boolean())],
  taxExemptReason: ['tax_exempt_reason', optional(string())],
  parentId: ['parent_id', optional(nullable(number()))],
});
