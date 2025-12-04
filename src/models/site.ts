/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  boolean,
  expandoObject,
  lazy,
  number,
  optional,
  Schema,
  string,
} from '../schema.js';
import {
  AllocationSettings,
  allocationSettingsSchema,
} from './allocationSettings.js';
import { NetTerms, netTermsSchema } from './netTerms.js';
import {
  OrganizationAddress,
  organizationAddressSchema,
} from './organizationAddress.js';
import {
  TaxConfiguration,
  taxConfigurationSchema,
} from './taxConfiguration.js';

export interface Site {
  id?: number;
  name?: string;
  subdomain?: string;
  currency?: string;
  sellerId?: number;
  nonPrimaryCurrencies?: string[];
  relationshipInvoicingEnabled?: boolean;
  scheduleSubscriptionCancellationEnabled?: boolean;
  customerHierarchyEnabled?: boolean;
  whopaysEnabled?: boolean;
  whopaysDefaultPayer?: string;
  allocationSettings?: AllocationSettings;
  defaultPaymentCollectionMethod?: string;
  organizationAddress?: OrganizationAddress;
  taxConfiguration?: TaxConfiguration;
  netTerms?: NetTerms;
  test?: boolean;
  [key: string]: unknown;
}

export const siteSchema: Schema<Site> = lazy(() =>
  expandoObject({
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
    scheduleSubscriptionCancellationEnabled: [
      'schedule_subscription_cancellation_enabled',
      optional(boolean()),
    ],
    customerHierarchyEnabled: [
      'customer_hierarchy_enabled',
      optional(boolean()),
    ],
    whopaysEnabled: ['whopays_enabled', optional(boolean())],
    whopaysDefaultPayer: ['whopays_default_payer', optional(string())],
    allocationSettings: [
      'allocation_settings',
      optional(allocationSettingsSchema),
    ],
    defaultPaymentCollectionMethod: [
      'default_payment_collection_method',
      optional(string()),
    ],
    organizationAddress: [
      'organization_address',
      optional(organizationAddressSchema),
    ],
    taxConfiguration: ['tax_configuration', optional(taxConfigurationSchema)],
    netTerms: ['net_terms', optional(netTermsSchema)],
    test: ['test', optional(boolean())],
  })
);
