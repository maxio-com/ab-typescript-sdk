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

export interface Customer {
  /** The first name of the customer */
  firstName?: string;
  /** The last name of the customer */
  lastName?: string;
  /** The email address of the customer */
  email?: string;
  /** A comma-separated list of emails that should be cc’d on all customer communications (i.e. “joe@example.com, sue@example.com”) */
  ccEmails?: string | null;
  /** The organization of the customer */
  organization?: string | null;
  /** The unique identifier used within your own application for this customer */
  reference?: string | null;
  /** The customer ID in Chargify */
  id?: number;
  /** The timestamp in which the customer object was created in Chargify */
  createdAt?: string;
  /** The timestamp in which the customer object was last edited */
  updatedAt?: string;
  /** The customer’s shipping street address (i.e. “123 Main St.”) */
  address?: string | null;
  /** Second line of the customer’s shipping address i.e. “Apt. 100” */
  address2?: string | null;
  /** The customer’s shipping address city (i.e. “Boston”) */
  city?: string | null;
  /** The customer’s shipping address state (i.e. “MA”) */
  state?: string | null;
  /** The customer's full name of state */
  stateName?: string | null;
  /** The customer’s shipping address zip code (i.e. “12345”) */
  zip?: string | null;
  /** The customer shipping address country */
  country?: string | null;
  /** The customer's full name of country */
  countryName?: string | null;
  /** The phone number of the customer */
  phone?: string | null;
  /** Is the customer verified to use ACH as a payment method. Available only on Authorize.Net gateway */
  verified?: boolean | null;
  /** The timestamp of when the Billing Portal entry was created at for the customer */
  portalCustomerCreatedAt?: string | null;
  /** The timestamp of when the Billing Portal invite was last sent at */
  portalInviteLastSentAt?: string | null;
  /** The timestamp of when the Billing Portal invite was last accepted */
  portalInviteLastAcceptedAt?: string | null;
  /** The tax exempt status for the customer. Acceptable values are true or 1 for true and false or 0 for false. */
  taxExempt?: boolean;
  /** The VAT business identification number for the customer. This number is used to determine VAT tax opt out rules. It is not validated when added or updated on a customer record. Instead, it is validated via VIES before calculating taxes. Only valid business identification numbers will allow for VAT opt out. */
  vatNumber?: string | null;
  /** The parent ID in Chargify if applicable. Parent is another Customer object. */
  parentId?: number | null;
  /** The locale for the customer to identify language-region */
  locale?: string | null;
  defaultSubscriptionGroupUid?: string | null;
}

export const customerSchema: Schema<Customer> = object({
  firstName: ['first_name', optional(string())],
  lastName: ['last_name', optional(string())],
  email: ['email', optional(string())],
  ccEmails: ['cc_emails', optional(nullable(string()))],
  organization: ['organization', optional(nullable(string()))],
  reference: ['reference', optional(nullable(string()))],
  id: ['id', optional(number())],
  createdAt: ['created_at', optional(string())],
  updatedAt: ['updated_at', optional(string())],
  address: ['address', optional(nullable(string()))],
  address2: ['address_2', optional(nullable(string()))],
  city: ['city', optional(nullable(string()))],
  state: ['state', optional(nullable(string()))],
  stateName: ['state_name', optional(nullable(string()))],
  zip: ['zip', optional(nullable(string()))],
  country: ['country', optional(nullable(string()))],
  countryName: ['country_name', optional(nullable(string()))],
  phone: ['phone', optional(nullable(string()))],
  verified: ['verified', optional(nullable(boolean()))],
  portalCustomerCreatedAt: [
    'portal_customer_created_at',
    optional(nullable(string())),
  ],
  portalInviteLastSentAt: [
    'portal_invite_last_sent_at',
    optional(nullable(string())),
  ],
  portalInviteLastAcceptedAt: [
    'portal_invite_last_accepted_at',
    optional(nullable(string())),
  ],
  taxExempt: ['tax_exempt', optional(boolean())],
  vatNumber: ['vat_number', optional(nullable(string()))],
  parentId: ['parent_id', optional(nullable(number()))],
  locale: ['locale', optional(nullable(string()))],
  defaultSubscriptionGroupUid: [
    'default_subscription_group_uid',
    optional(nullable(string())),
  ],
});
