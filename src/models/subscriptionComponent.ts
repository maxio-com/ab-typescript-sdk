/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  boolean,
  lazy,
  nullable,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import {
  SubscriptionComponentPricePointType,
  subscriptionComponentPricePointTypeSchema,
} from './containers/subscriptionComponentPricePointType';
import {
  SubscriptionComponentSubscription,
  subscriptionComponentSubscriptionSchema,
} from './subscriptionComponentSubscription';

export interface SubscriptionComponent {
  id?: number;
  name?: string;
  kind?: string;
  unitName?: string;
  /** (for on/off components) indicates if the component is enabled for the subscription */
  enabled?: boolean;
  unitBalance?: number;
  currency?: string;
  /** For Quantity-based components: The current allocation for the component on the given subscription. For On/Off components: Use 1 for on. Use 0 for off. */
  allocatedQuantity?: number;
  pricingScheme?: string | null;
  componentId?: number;
  componentHandle?: string | null;
  subscriptionId?: number;
  recurring?: boolean;
  upgradeCharge?: string | null;
  downgradeCredit?: string | null;
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
}

export const subscriptionComponentSchema: Schema<SubscriptionComponent> = object(
  {
    id: ['id', optional(number())],
    name: ['name', optional(string())],
    kind: ['kind', optional(string())],
    unitName: ['unit_name', optional(string())],
    enabled: ['enabled', optional(boolean())],
    unitBalance: ['unit_balance', optional(number())],
    currency: ['currency', optional(string())],
    allocatedQuantity: ['allocated_quantity', optional(number())],
    pricingScheme: ['pricing_scheme', optional(nullable(string()))],
    componentId: ['component_id', optional(number())],
    componentHandle: ['component_handle', optional(nullable(string()))],
    subscriptionId: ['subscription_id', optional(number())],
    recurring: ['recurring', optional(boolean())],
    upgradeCharge: ['upgrade_charge', optional(nullable(string()))],
    downgradeCredit: ['downgrade_credit', optional(nullable(string()))],
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
  }
);
