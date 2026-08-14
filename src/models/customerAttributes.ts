/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  boolean,
  dict,
  expandoObject,
  nullable,
  number,
  optional,
  Schema,
  string,
} from '../schema.js';

export interface CustomerAttributes {
  /** The first name of the customer. Required when creating a customer via attributes. */
  firstName?: string;
  /** The last name of the customer. Required when creating a customer via attributes. */
  lastName?: string;
  /** The email address of the customer. Required when creating a customer via attributes. */
  email?: string;
  /** (Optional) A list of emails that should be cc’d on all customer communications. */
  ccEmails?: string;
  /** (Optional) The organization/company of the customer. */
  organization?: string;
  /** (Optional) A customer “reference”, or unique identifier from your app, stored in Chargify. Can be used so that you may reference your customer’s within Chargify using the same unique value you use in your application. */
  reference?: string;
  /** (Optional) The customer’s shipping street address (e.g., “123 Main St.”). */
  address?: string;
  /** (Optional) Second line of the customer’s shipping address e.g., “Apt. 100” */
  address2?: string | null;
  /** (Optional) The customer’s shipping address city (e.g., “Boston”). */
  city?: string;
  /** “(Optional) The customer’s shipping address state (e.g., “MA”). This must conform to the [ISO_3166-1](https://en.wikipedia.org/wiki/ISO_3166-1#Current_codes) in order to be valid for tax locale purposes.” */
  state?: string;
  /** (Optional) The customer’s shipping address zip code (e.g., “12345”). */
  zip?: string;
  /** “(Optional) The customer shipping address country, required in [ISO_3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format (e.g., “US”).” */
  country?: string;
  /** (Optional) The phone number of the customer. */
  phone?: string;
  verified?: boolean;
  /** (Optional) The tax_exempt status of the customer. Acceptable values are true or 1 for true and false or 0 for false. */
  taxExempt?: boolean;
  /** (Optional) Whether surcharging is enabled for the customer. Defaults to `true` when omitted. Only applied on sites where surcharging control is enabled. */
  surcharging?: boolean;
  /** (Optional) Supplying the VAT number allows EU customers to opt-out of the Value Added Tax assuming the merchant address and customer billing address are not within the same EU country. It’s important to omit the country code from the VAT number upon entry. Otherwise, taxes will be assessed upon the purchase. */
  vatNumber?: string;
  /** (Optional) A set of key/value pairs representing custom fields and their values. Metafields will be created “on-the-fly” in your site for a given key, if they have not been created yet. */
  metafields?: Record<string, string>;
  /** The parent ID in Chargify if applicable. Parent is another Customer object. */
  parentId?: number | null;
  /** (Optional) The Salesforce ID of the customer. */
  salesforceId?: string | null;
  /** (Optional) The default auto-renewal profile ID for the customer */
  defaultAutoRenewalProfileId?: number | null;
  [key: string]: unknown;
}

export const customerAttributesSchema: Schema<CustomerAttributes> = expandoObject(
  {
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
    surcharging: ['surcharging', optional(boolean())],
    vatNumber: ['vat_number', optional(string())],
    metafields: ['metafields', optional(dict(string()))],
    parentId: ['parent_id', optional(nullable(number()))],
    salesforceId: ['salesforce_id', optional(nullable(string()))],
    defaultAutoRenewalProfileId: [
      'default_auto_renewal_profile_id',
      optional(nullable(number())),
    ],
  }
);
