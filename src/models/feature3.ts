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

export interface Feature3 {
  value?: string;
  periodicityInterval?: number | null;
  periodicityUnit?: EntitlementPeriodicityUnit | null;
  /** When `true`, existing subscriptions on the item's price point are updated with the new `value`/periodicity by a background job shortly after. Has no effect on a product/component-level item. When `false` (default) and the item's price point already has subscribers, the update is made on a clone of the price point instead, and existing subscribers are unaffected. */
  propagateToSubscriptions?: boolean;
  [key: string]: unknown;
}

export const feature3Schema: Schema<Feature3> = expandoObject({
  value: ['value', optional(string())],
  periodicityInterval: ['periodicity_interval', optional(nullable(number()))],
  periodicityUnit: [
    'periodicity_unit',
    optional(nullable(entitlementPeriodicityUnitSchema)),
  ],
  propagateToSubscriptions: ['propagate_to_subscriptions', optional(boolean())],
});
