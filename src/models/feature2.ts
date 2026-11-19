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
  EntitlementPeriodicityUnit,
  entitlementPeriodicityUnitSchema,
} from './entitlementPeriodicityUnit.js';
import {
  FeatureOwnerPricePointType,
  featureOwnerPricePointTypeSchema,
} from './featureOwnerPricePointType.js';

export interface Feature2 {
  /** The id of the feature template to attach. */
  featureTemplateId: number;
  /** The value granted. Defaults to the feature template's `default_value`; required when the template has none. */
  value?: string;
  /** Required for `usage_limit` features, unless the feature template has a default periodicity, which is used when omitted. Must be omitted for other kinds. */
  periodicityInterval?: number | null;
  /** Required for `usage_limit` features, unless the feature template has a default periodicity, which is used when omitted. Must be omitted for other kinds. */
  periodicityUnit?: EntitlementPeriodicityUnit | null;
  /** Set together with `price_point_id` to scope the feature catalog item to a single price point. Omit both to create a product/component-level item, which is a template: it is copied onto price points created afterwards (except bulk-created ones; Clone Component Price Point applies only the items sent with it), but not added to price points that already exist or to their subscribers. */
  pricePointType?: FeatureOwnerPricePointType | null;
  pricePointId?: number | null;
  /** Applies to price-point-scoped items only. When `true`, existing subscriptions on that price point are granted an entitlement for this feature by a background job shortly after, instead of at their next subscription change. When `false` (default) and the price point already has subscribers, the feature is created on a clone of the price point instead, and existing subscribers are unaffected. On a product/component-level item it has no effect, except when the call restores that item's archived price-point copies (creating an item again for a feature template whose item was archived): then `true` grants the feature to those price points' subscribers, and without it the call returns `422` if any of them lack the feature. */
  propagateToSubscriptions?: boolean;
  [key: string]: unknown;
}

export const feature2Schema: Schema<Feature2> = expandoObject({
  featureTemplateId: ['feature_template_id', number()],
  value: ['value', optional(string())],
  periodicityInterval: ['periodicity_interval', optional(nullable(number()))],
  periodicityUnit: [
    'periodicity_unit',
    optional(nullable(entitlementPeriodicityUnitSchema)),
  ],
  pricePointType: [
    'price_point_type',
    optional(nullable(featureOwnerPricePointTypeSchema)),
  ],
  pricePointId: ['price_point_id', optional(nullable(number()))],
  propagateToSubscriptions: ['propagate_to_subscriptions', optional(boolean())],
});
