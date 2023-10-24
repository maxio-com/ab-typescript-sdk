/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  boolean,
  dict,
  nullable,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';

export interface CustomerAttributes {
  /** The first name of the customer. Required when creating a customer via attributes. */
  firstName?: string;
  /** The last name of the customer. Required when creating a customer via attributes. */
  lastName?: string;
  /** The email address of the customer. Required when creating a customer via attributes. */
  email?: string;
  /** A list of emails that should be cc’d on all customer communications. Optional. */
  ccEmails?: string;
  /** The organization/company of the customer. Optional. */
  organization?: string;
  /** A customer “reference”, or unique identifier from your app, stored in Chargify. Can be used so that you may reference your customer’s within Chargify using the same unique value you use in your application. Optional. */
  reference?: string;
  /** (Optional) The customer’s shipping street address (i.e. “123 Main St.”). */
  address?: string;
  /** (Optional) Second line of the customer’s shipping address i.e. “Apt. 100” */
  address2?: string | null;
  /** (Optional) The customer’s shipping address city (i.e. “Boston”). */
  city?: string;
  /** (Optional) The customer’s shipping address state (i.e. “MA”). This must conform to the [ISO_3166-1](https://en.wikipedia.org/wiki/ISO_3166-1#Current_codes) in order to be valid for tax locale purposes. */
  state?: string;
  /** (Optional) The customer’s shipping address zip code (i.e. “12345”). */
  zip?: string;
  /** (Optional) The customer shipping address country, required in [ISO_3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format (i.e. “US”). */
  country?: string;
  /** (Optional) The phone number of the customer. */
  phone?: string;
  verified?: boolean;
  /** (Optional) The tax_exempt status of the customer. Acceptable values are true or 1 for true and false or 0 for false. */
  taxExempt?: boolean;
  /** (Optional) Supplying the VAT number allows EU customer’s to opt-out of the Value Added Tax assuming the merchant address and customer billing address are not within the same EU country. It’s important to omit the country code from the VAT number upon entry. Otherwise, taxes will be assessed upon the purchase. */
  vatNumber?: string;
  /** (Optional) A set of key/value pairs representing custom fields and their values. Metafields will be created “on-the-fly” in your site for a given key, if they have not been created yet. */
  metafields?: Record<string, string>;
  /** The parent ID in Chargify if applicable. Parent is another Customer object. */
  parentId?: number | null;
}

export const customerAttributesSchema: Schema<CustomerAttributes> = object({
  firstName: ['first_name', optional(string())],
  lastName: ['last_name', optional(string())],
  email: ['email', optional(string())],
  ccEmails: ['cc_emails', optional(string())],
  organization: ['organization', optional(string())],
  reference: ['reference', optional(string())],
  address: ['address', optional(string())],
  address2: ['address_2', optional(nullable(string()))],
  city: ['city', optional(string())],
  state: ['state', optional(string())],
  zip: ['zip', optional(string())],
  country: ['country', optional(string())],
  phone: ['phone', optional(string())],
  verified: ['verified', optional(boolean())],
  taxExempt: ['tax_exempt', optional(boolean())],
  vatNumber: ['vat_number', optional(string())],
  metafields: ['metafields', optional(dict(string()))],
  parentId: ['parent_id', optional(nullable(number()))],
});
