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
import {
  GrantExpirationUnit,
  grantExpirationUnitSchema,
} from './grantExpirationUnit.js';

/**
 * A feature to put on the cloned price point. Requires Entitlements to be enabled for the site; ignored otherwise.
 * Unlike Create Feature Catalog Item, nothing falls back to the feature template's defaults: send `value`, and for a `usage_limit` feature its periodicity (and any grant expiration) explicitly. If any item can't be applied, for example a missing `value`, a `usage_limit` item without periodicity, or an archived or unknown feature template, the whole clone fails with `422` and nothing is created.
 */
export interface CloneFeatureCatalogItem {
  featureTemplateId: number;
  value: string;
  /** Required for `usage_limit` features; must be omitted for other kinds. */
  periodicityInterval?: number | null;
  /** Required for `usage_limit` features; must be omitted for other kinds. */
  periodicityUnit?: EntitlementPeriodicityUnit | null;
  /** `usage_limit` features only. A positive number of `grant_expiration_unit`s; required with `day` or `month`, and must be omitted with `until_next_refill`. */
  grantExpirationInterval?: number | null;
  /** `usage_limit` features only. */
  grantExpirationUnit?: GrantExpirationUnit | null;
  [key: string]: unknown;
}

export const cloneFeatureCatalogItemSchema: Schema<CloneFeatureCatalogItem> = expandoObject(
  {
    featureTemplateId: ['feature_template_id', number()],
    value: ['value', string()],
    periodicityInterval: ['periodicity_interval', optional(nullable(number()))],
    periodicityUnit: [
      'periodicity_unit',
      optional(nullable(entitlementPeriodicityUnitSchema)),
    ],
    grantExpirationInterval: [
      'grant_expiration_interval',
      optional(nullable(number())),
    ],
    grantExpirationUnit: [
      'grant_expiration_unit',
      optional(nullable(grantExpirationUnitSchema)),
    ],
  }
);
