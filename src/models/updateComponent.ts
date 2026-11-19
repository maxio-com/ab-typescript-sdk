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
import { CreditType, creditTypeSchema } from './creditType.js';
import { ItemCategory, itemCategorySchema } from './itemCategory.js';

export interface UpdateComponent {
  handle?: string;
  /** The name of the Component, suitable for display on statements. e.g., Text Messages. */
  name?: string;
  /** The description of the component. */
  description?: string | null;
  accountingCode?: string | null;
  /** Boolean flag describing whether a component is taxable or not. */
  taxable?: boolean;
  /** A string representing the tax code related to the component type. This is especially important when using AvaTax to tax based on locale. This attribute has a max length of 25 characters. */
  taxCode?: string | null;
  /** One of the following: Business Software, Consumer Software, Digital Services, Physical Goods, Other */
  itemCategory?: ItemCategory | null;
  displayOnHostedPage?: boolean;
  /** The type of credit to be created when upgrading/downgrading. Defaults to the component and then site setting if one is not provided. */
  upgradeCharge?: CreditType | null;
  /** For components using legacy Events Based Billing, changes the attached site-owned metric. An unchanged metric ID does not change the source. Sites using Maxio Metering ignore this input. This ID does not identify a Maxio Metering meter. */
  eventBasedBillingMetricId?: number;
  /** For components using Maxio Metering, changes the attached merchant-owned meter. Do not supply together with a non-blank metering_formula. Ignored for components using legacy Events Based Billing; not applicable to other component kinds. */
  meteringMeterId?: number;
  /** For components using Maxio Metering, sets an Advanced Formula using meters available to the site. Supply a non-blank formula; do not supply together with metering_meter_id. Ignored for components using legacy Events Based Billing; not applicable to other component kinds. */
  meteringFormula?: string;
  /** (Optional) Custom UNSPSC commodity code for Level 3/CEDP payment data. When set, this value is sent as the commodity code on invoice line items for this component instead of the default derived from item_category. */
  unspscCode?: string | null;
  [key: string]: unknown;
}

export const updateComponentSchema: Schema<UpdateComponent> = expandoObject({
  handle: ['handle', optional(string())],
  name: ['name', optional(string())],
  description: ['description', optional(nullable(string()))],
  accountingCode: ['accounting_code', optional(nullable(string()))],
  taxable: ['taxable', optional(boolean())],
  taxCode: ['tax_code', optional(nullable(string()))],
  itemCategory: ['item_category', optional(nullable(itemCategorySchema))],
  displayOnHostedPage: ['display_on_hosted_page', optional(boolean())],
  upgradeCharge: ['upgrade_charge', optional(nullable(creditTypeSchema))],
  eventBasedBillingMetricId: [
    'event_based_billing_metric_id',
    optional(number()),
  ],
  meteringMeterId: ['metering_meter_id', optional(number())],
  meteringFormula: ['metering_formula', optional(string())],
  unspscCode: ['unspsc_code', optional(nullable(string()))],
});
