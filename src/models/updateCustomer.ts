/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  boolean,
  expandoObject,
  nullable,
  number,
  optional,
  Schema,
  string,
} from '../schema';

export interface UpdateCustomer {
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
  /** Set a specific language on a customer record. */
  locale?: string;
  vatNumber?: string;
  taxExempt?: boolean;
  taxExemptReason?: string;
  parentId?: number | null;
  /** Is the customer verified to use ACH as a payment method. Available only on Authorize.Net gateway */
  verified?: boolean | null;
  /** The Salesforce ID of the customer */
  salesforceId?: string | null;
  [key: string]: unknown;
}

export const updateCustomerSchema: Schema<UpdateCustomer> = expandoObject({
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
  taxExempt: ['tax_exempt', optional(boolean())],
  taxExemptReason: ['tax_exempt_reason', optional(string())],
  parentId: ['parent_id', optional(nullable(number()))],
  verified: ['verified', optional(nullable(boolean()))],
  salesforceId: ['salesforce_id', optional(nullable(string()))],
});
