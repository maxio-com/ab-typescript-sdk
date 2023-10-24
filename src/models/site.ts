/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  boolean,
  lazy,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import {
  AllocationSettings,
  allocationSettingsSchema,
} from './allocationSettings';
import { NetTerms, netTermsSchema } from './netTerms';
import {
  OrganizationAddress,
  organizationAddressSchema,
} from './organizationAddress';
import { TaxConfiguration, taxConfigurationSchema } from './taxConfiguration';

export interface Site {
  id?: number;
  name?: string;
  subdomain?: string;
  currency?: string;
  sellerId?: number;
  nonPrimaryCurrencies?: string[];
  relationshipInvoicingEnabled?: boolean;
  customerHierarchyEnabled?: boolean;
  whopaysEnabled?: boolean;
  whopaysDefaultPayer?: string;
  allocationSettings?: AllocationSettings;
  defaultPaymentCollectionMethod?: string;
  organizationAddress?: OrganizationAddress;
  taxConfiguration?: TaxConfiguration;
  netTerms?: NetTerms;
  test?: boolean;
}

export const siteSchema: Schema<Site> = object({
  id: ['id', optional(number())],
  name: ['name', optional(string())],
  subdomain: ['subdomain', optional(string())],
  currency: ['currency', optional(string())],
  sellerId: ['seller_id', optional(number())],
  nonPrimaryCurrencies: ['non_primary_currencies', optional(array(string()))],
  relationshipInvoicingEnabled: [
    'relationship_invoicing_enabled',
    optional(boolean()),
  ],
  customerHierarchyEnabled: ['customer_hierarchy_enabled', optional(boolean())],
  whopaysEnabled: ['whopays_enabled', optional(boolean())],
  whopaysDefaultPayer: ['whopays_default_payer', optional(string())],
  allocationSettings: [
    'allocation_settings',
    optional(lazy(() => allocationSettingsSchema)),
  ],
  defaultPaymentCollectionMethod: [
    'default_payment_collection_method',
    optional(string()),
  ],
  organizationAddress: [
    'organization_address',
    optional(lazy(() => organizationAddressSchema)),
  ],
  taxConfiguration: [
    'tax_configuration',
    optional(lazy(() => taxConfigurationSchema)),
  ],
  netTerms: ['net_terms', optional(lazy(() => netTermsSchema))],
  test: ['test', optional(boolean())],
});
