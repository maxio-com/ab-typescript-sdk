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
} from '../schema.js';
import {
  EntityIdentifierKind,
  entityIdentifierKindSchema,
} from './entityIdentifierKind.js';

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
  /** The two-letter ISO 3166-1 country code that qualifies the customer's tax ID. Required when `entity_identifier_kind` is `vat_eu` or `national_tax`, and used to derive the kind when only the legacy `vat_number` is sent. */
  vatCountry?: string;
  /**
   * The kind of tax or business identifier held by the customer:
   * - `vat_eu`: an EU VAT number. Requires `vat_country` to be an EU member state code or `GB`.
   * - `national_tax`: a national tax ID registered outside the EU. Requires `vat_country` to be one of `AL`, `AM`, `AR`, `AU`, `BR`, `CA`, `CH`, `DZ`, `IN`, `MX`, `NO`, `NZ`, or `ZA`.
   * - `company_reg`: a company registration number, such as a French SIREN. No `vat_country` is required.
   * - `gln`: a Global Location Number. The value must be 13 digits.
   * - `duns`: a D-U-N-S Number. The value must be 9 digits.
   * - `lei`: a Legal Entity Identifier. The value must be 20 characters: 18 letters or digits followed by 2 digits.
   * A customer holds one identifier at a time. Saving an identifier of a different kind replaces the existing one.
   */
  entityIdentifierKind?: EntityIdentifierKind;
  /** The customer's tax or business identifier, sent together with `entity_identifier_kind`. Advanced Billing trims surrounding whitespace and stores the value in uppercase. */
  entityIdentifierValue?: string;
  taxExempt?: boolean;
  /** Whether surcharging is enabled for the customer. Only applied on sites where surcharging control is enabled. */
  surcharging?: boolean;
  taxExemptReason?: string;
  parentId?: number | null;
  /** Is the customer verified to use ACH as a payment method. Available only on the Authorize.Net gateway. */
  verified?: boolean | null;
  /** The Salesforce ID of the customer */
  salesforceId?: string | null;
  /** The ID of the Branding Theme assigned to this customer as the customer's default Branding Theme. This customer-level Branding Theme is used when a subscription does not have its own subscription-level Branding Theme. Available only when Branding Themes are enabled for the site. */
  brandingThemeId?: number | null;
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
  vatCountry: ['vat_country', optional(string())],
  entityIdentifierKind: [
    'entity_identifier_kind',
    optional(entityIdentifierKindSchema),
  ],
  entityIdentifierValue: ['entity_identifier_value', optional(string())],
  taxExempt: ['tax_exempt', optional(boolean())],
  surcharging: ['surcharging', optional(boolean())],
  taxExemptReason: ['tax_exempt_reason', optional(string())],
  parentId: ['parent_id', optional(nullable(number()))],
  verified: ['verified', optional(nullable(boolean()))],
  salesforceId: ['salesforce_id', optional(nullable(string()))],
  brandingThemeId: ['branding_theme_id', optional(nullable(number()))],
});
