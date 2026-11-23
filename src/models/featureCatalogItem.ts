/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
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
import { FeatureKind, featureKindSchema } from './featureKind.js';
import {
  FeatureOwnerPricePointType,
  featureOwnerPricePointTypeSchema,
} from './featureOwnerPricePointType.js';

/** A feature template attached to a specific product or component (or one of their price points), with a concrete value. When a subscriber signs up for or is assigned this product/component, the feature catalog item is provisioned as an entitlement on their subscription. */
export interface FeatureCatalogItem {
  id?: number;
  /** The id of the feature template this item was created from. */
  featureTemplateId?: number;
  /** The `key` of the parent feature template. */
  featureKey?: string;
  /** The `name` of the parent feature template. */
  featureName?: string;
  /**
   * The behavior of a feature:
   * - `access_right`: a boolean entitlement. A subscriber either has access or does not.
   * - `usage_limit`: a quantified allowance measured over a recurring period (for example, "10,000 API calls per month").
   * - `service_right`: a free-form value (text, boolean, or number) that isn't a simple access flag or a metered limit.
   */
  featureKind?: FeatureKind;
  /** The value granted by this feature catalog item. Interpreted according to `feature_kind`: `"true"`/`"false"` for `access_right`, a numeric string for `usage_limit`, or any string for `service_right` (shaped by the feature template's `value_type`). */
  value?: string;
  /** Set when `feature_kind` is `usage_limit`; `null` otherwise. */
  periodicityInterval?: number | null;
  /** Set when `feature_kind` is `usage_limit`; `null` otherwise. */
  periodicityUnit?: EntitlementPeriodicityUnit | null;
  /** `null` when this feature catalog item applies to every price point of its owning product/component. Set when the feature catalog item is an override for one specific price point. */
  pricePointType?: FeatureOwnerPricePointType | null;
  /** Set together with `price_point_type` for price-point-specific overrides. */
  pricePointId?: number | null;
  archivedAt?: string | null;
  createdAt?: string;
  updatedAt?: string;
  [key: string]: unknown;
}

export const featureCatalogItemSchema: Schema<FeatureCatalogItem> = expandoObject(
  {
    id: ['id', optional(number())],
    featureTemplateId: ['feature_template_id', optional(number())],
    featureKey: ['feature_key', optional(string())],
    featureName: ['feature_name', optional(string())],
    featureKind: ['feature_kind', optional(featureKindSchema)],
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
    archivedAt: ['archived_at', optional(nullable(string()))],
    createdAt: ['created_at', optional(string())],
    updatedAt: ['updated_at', optional(string())],
  }
);
