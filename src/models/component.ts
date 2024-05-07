/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  bigint,
  boolean,
  expandoObject,
  lazy,
  nullable,
  number,
  optional,
  Schema,
  string,
} from '../schema';
import { ComponentKind, componentKindSchema } from './componentKind';
import { ComponentPrice, componentPriceSchema } from './componentPrice';
import { CreditType, creditTypeSchema } from './creditType';
import { IntervalUnit, intervalUnitSchema } from './intervalUnit';
import { ItemCategory, itemCategorySchema } from './itemCategory';
import { PricingScheme, pricingSchemeSchema } from './pricingScheme';

export interface Component {
  /** The unique ID assigned to the component by Chargify. This ID can be used to fetch the component from the API. */
  id?: number;
  /** The name of the Component, suitable for display on statements. i.e. Text Messages. */
  name?: string;
  /** The component API handle */
  handle?: string | null;
  pricingScheme?: PricingScheme | null;
  /** The name of the unit that the component’s usage is measured in. i.e. message */
  unitName?: string;
  /** The amount the customer will be charged per unit. This field is only populated for ‘per_unit’ pricing schemes, otherwise it may be null. */
  unitPrice?: string | null;
  /** The id of the Product Family to which the Component belongs */
  productFamilyId?: number;
  /** The name of the Product Family to which the Component belongs */
  productFamilyName?: string;
  /** deprecated - use unit_price instead */
  pricePerUnitInCents?: bigint | null;
  /** A handle for the component type */
  kind?: ComponentKind;
  /** Boolean flag describing whether a component is archived or not. */
  archived?: boolean;
  /** Boolean flag describing whether a component is taxable or not. */
  taxable?: boolean;
  /** The description of the component. */
  description?: string | null;
  defaultPricePointId?: number | null;
  /** An array of price brackets. If the component uses the ‘per_unit’ pricing scheme, this array will be empty. */
  overagePrices?: ComponentPrice[] | null;
  /** An array of price brackets. If the component uses the ‘per_unit’ pricing scheme, this array will be empty. */
  prices?: ComponentPrice[] | null;
  /** Count for the number of price points associated with the component */
  pricePointCount?: number;
  /** URL that points to the location to read the existing price points via GET request */
  pricePointsUrl?: string | null;
  defaultPricePointName?: string;
  /** A string representing the tax code related to the component type. This is especially important when using the Avalara service to tax based on locale. This attribute has a max length of 10 characters. */
  taxCode?: string | null;
  recurring?: boolean;
  /**
   * The type of credit to be created when upgrading/downgrading. Defaults to the component and then site setting if one is not provided.
   * Available values: `full`, `prorated`, `none`.
   */
  upgradeCharge?: CreditType | null;
  /**
   * The type of credit to be created when upgrading/downgrading. Defaults to the component and then site setting if one is not provided.
   * Available values: `full`, `prorated`, `none`.
   */
  downgradeCredit?: CreditType | null;
  /** Timestamp indicating when this component was created */
  createdAt?: string;
  /** Timestamp indicating when this component was updated */
  updatedAt?: string;
  /** Timestamp indicating when this component was archived */
  archivedAt?: string | null;
  /** (Only available on Relationship Invoicing sites) Boolean flag describing if the service date range should show for the component on generated invoices. */
  hideDateRangeOnInvoice?: boolean;
  allowFractionalQuantities?: boolean;
  /** One of the following: Business Software, Consumer Software, Digital Services, Physical Goods, Other */
  itemCategory?: ItemCategory | null;
  useSiteExchangeRate?: boolean | null;
  /** E.g. Internal ID or SKU Number */
  accountingCode?: string | null;
  /** (Only for Event Based Components) This is an ID of a metric attached to the component. This metric is used to bill upon collected events. */
  eventBasedBillingMetricId?: number;
  /** The numerical interval. i.e. an interval of ‘30’ coupled with an interval_unit of day would mean this component's default price point would renew every 30 days. This property is only available for sites with Multifrequency enabled. */
  interval?: number;
  /** A string representing the interval unit for this component's default price point, either month or day. This property is only available for sites with Multifrequency enabled. */
  intervalUnit?: IntervalUnit;
  [key: string]: unknown;
}

export const componentSchema: Schema<Component> = expandoObject({
  id: ['id', optional(number())],
  name: ['name', optional(string())],
  handle: ['handle', optional(nullable(string()))],
  pricingScheme: ['pricing_scheme', optional(nullable(pricingSchemeSchema))],
  unitName: ['unit_name', optional(string())],
  unitPrice: ['unit_price', optional(nullable(string()))],
  productFamilyId: ['product_family_id', optional(number())],
  productFamilyName: ['product_family_name', optional(string())],
  pricePerUnitInCents: [
    'price_per_unit_in_cents',
    optional(nullable(bigint())),
  ],
  kind: ['kind', optional(componentKindSchema)],
  archived: ['archived', optional(boolean())],
  taxable: ['taxable', optional(boolean())],
  description: ['description', optional(nullable(string()))],
  defaultPricePointId: ['default_price_point_id', optional(nullable(number()))],
  overagePrices: [
    'overage_prices',
    optional(nullable(array(lazy(() => componentPriceSchema)))),
  ],
  prices: [
    'prices',
    optional(nullable(array(lazy(() => componentPriceSchema)))),
  ],
  pricePointCount: ['price_point_count', optional(number())],
  pricePointsUrl: ['price_points_url', optional(nullable(string()))],
  defaultPricePointName: ['default_price_point_name', optional(string())],
  taxCode: ['tax_code', optional(nullable(string()))],
  recurring: ['recurring', optional(boolean())],
  upgradeCharge: ['upgrade_charge', optional(nullable(creditTypeSchema))],
  downgradeCredit: ['downgrade_credit', optional(nullable(creditTypeSchema))],
  createdAt: ['created_at', optional(string())],
  updatedAt: ['updated_at', optional(string())],
  archivedAt: ['archived_at', optional(nullable(string()))],
  hideDateRangeOnInvoice: ['hide_date_range_on_invoice', optional(boolean())],
  allowFractionalQuantities: [
    'allow_fractional_quantities',
    optional(boolean()),
  ],
  itemCategory: ['item_category', optional(nullable(itemCategorySchema))],
  useSiteExchangeRate: [
    'use_site_exchange_rate',
    optional(nullable(boolean())),
  ],
  accountingCode: ['accounting_code', optional(nullable(string()))],
  eventBasedBillingMetricId: [
    'event_based_billing_metric_id',
    optional(number()),
  ],
  interval: ['interval', optional(number())],
  intervalUnit: ['interval_unit', optional(intervalUnitSchema)],
});
