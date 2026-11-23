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
  FeatureValueType,
  featureValueTypeSchema,
} from './featureValueType.js';

/** `key` cannot be changed once set. `kind` cannot be changed once any feature catalog item has been created from this template. */
export interface Feature1 {
  name?: string;
  description?: string | null;
  unit?: string | null;
  /** The data type of a feature's value. For `access_right` features this is always `boolean`, and for `usage_limit` features this is always `numeric`. For `service_right` features, you choose the value type explicitly. */
  valueType?: FeatureValueType;
  defaultValue?: string | null;
  defaultPeriodicityInterval?: number | null;
  defaultPeriodicityUnit?: EntitlementPeriodicityUnit | null;
  [key: string]: unknown;
}

export const feature1Schema: Schema<Feature1> = expandoObject({
  name: ['name', optional(string())],
  description: ['description', optional(nullable(string()))],
  unit: ['unit', optional(nullable(string()))],
  valueType: ['value_type', optional(featureValueTypeSchema)],
  defaultValue: ['default_value', optional(nullable(string()))],
  defaultPeriodicityInterval: [
    'default_periodicity_interval',
    optional(nullable(number())),
  ],
  defaultPeriodicityUnit: [
    'default_periodicity_unit',
    optional(nullable(entitlementPeriodicityUnitSchema)),
  ],
});
