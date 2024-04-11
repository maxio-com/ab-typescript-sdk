/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
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
import {
  SubscriptionComponentAllocatedQuantity,
  subscriptionComponentAllocatedQuantitySchema,
} from './containers/subscriptionComponentAllocatedQuantity';
import {
  SubscriptionComponentPricePointType,
  subscriptionComponentPricePointTypeSchema,
} from './containers/subscriptionComponentPricePointType';
import {
  SubscriptionComponentPricingScheme,
  subscriptionComponentPricingSchemeSchema,
} from './containers/subscriptionComponentPricingScheme';
import { CreditType, creditTypeSchema } from './creditType';
import { IntervalUnit, intervalUnitSchema } from './intervalUnit';
import {
  SubscriptionComponentSubscription,
  subscriptionComponentSubscriptionSchema,
} from './subscriptionComponentSubscription';

export interface SubscriptionComponent {
  id?: number;
  name?: string;
  /** A handle for the component type */
  kind?: ComponentKind;
  unitName?: string;
  /** (for on/off components) indicates if the component is enabled for the subscription */
  enabled?: boolean;
  unitBalance?: number;
  currency?: string;
  /** For Quantity-based components: The current allocation for the component on the given subscription. For On/Off components: Use 1 for on. Use 0 for off. */
  allocatedQuantity?: SubscriptionComponentAllocatedQuantity;
  pricingScheme?: SubscriptionComponentPricingScheme | null;
  componentId?: number;
  componentHandle?: string | null;
  subscriptionId?: number;
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
  archivedAt?: string | null;
  pricePointId?: number | null;
  pricePointHandle?: string | null;
  pricePointType?: SubscriptionComponentPricePointType;
  pricePointName?: string | null;
  productFamilyId?: number;
  productFamilyHandle?: string;
  createdAt?: string;
  updatedAt?: string;
  useSiteExchangeRate?: boolean | null;
  description?: string | null;
  allowFractionalQuantities?: boolean;
  /** An optional object, will be returned if provided `include=subscription` query param. */
  subscription?: SubscriptionComponentSubscription;
  displayOnHostedPage?: boolean;
  /** The numerical interval. i.e. an interval of '30' coupled with an interval_unit of day would mean this component price point would renew every 30 days. This property is only available for sites with Multifrequency enabled. */
  interval?: number;
  /** A string representing the interval unit for this component price point, either month or day. This property is only available for sites with Multifrequency enabled. */
  intervalUnit?: IntervalUnit;
  [key: string]: unknown;
}

export const subscriptionComponentSchema: Schema<SubscriptionComponent> = expandoObject(
  {
    id: ['id', optional(number())],
    name: ['name', optional(string())],
    kind: ['kind', optional(componentKindSchema)],
    unitName: ['unit_name', optional(string())],
    enabled: ['enabled', optional(boolean())],
    unitBalance: ['unit_balance', optional(number())],
    currency: ['currency', optional(string())],
    allocatedQuantity: [
      'allocated_quantity',
      optional(subscriptionComponentAllocatedQuantitySchema),
    ],
    pricingScheme: [
      'pricing_scheme',
      optional(nullable(subscriptionComponentPricingSchemeSchema)),
    ],
    componentId: ['component_id', optional(number())],
    componentHandle: ['component_handle', optional(nullable(string()))],
    subscriptionId: ['subscription_id', optional(number())],
    recurring: ['recurring', optional(boolean())],
    upgradeCharge: ['upgrade_charge', optional(nullable(creditTypeSchema))],
    downgradeCredit: ['downgrade_credit', optional(nullable(creditTypeSchema))],
    archivedAt: ['archived_at', optional(nullable(string()))],
    pricePointId: ['price_point_id', optional(nullable(number()))],
    pricePointHandle: ['price_point_handle', optional(nullable(string()))],
    pricePointType: [
      'price_point_type',
      optional(subscriptionComponentPricePointTypeSchema),
    ],
    pricePointName: ['price_point_name', optional(nullable(string()))],
    productFamilyId: ['product_family_id', optional(number())],
    productFamilyHandle: ['product_family_handle', optional(string())],
    createdAt: ['created_at', optional(string())],
    updatedAt: ['updated_at', optional(string())],
    useSiteExchangeRate: [
      'use_site_exchange_rate',
      optional(nullable(boolean())),
    ],
    description: ['description', optional(nullable(string()))],
    allowFractionalQuantities: [
      'allow_fractional_quantities',
      optional(boolean()),
    ],
    subscription: [
      'subscription',
      optional(lazy(() => subscriptionComponentSubscriptionSchema)),
    ],
    displayOnHostedPage: ['display_on_hosted_page', optional(boolean())],
    interval: ['interval', optional(number())],
    intervalUnit: ['interval_unit', optional(intervalUnitSchema)],
  }
);
