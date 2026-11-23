/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  expandoObject,
  lazy,
  number,
  Schema,
  string,
} from '../schema.js';
import {
  AggregatedEntitlement,
  aggregatedEntitlementSchema,
} from './aggregatedEntitlement.js';

export interface AggregatedEntitlementsResponse {
  subscriptionId: number;
  customerId: number;
  /** The subscription's current state, e.g. `active`, `trialing`, `canceled`. */
  status: string;
  entitlements: AggregatedEntitlement[];
  [key: string]: unknown;
}

export const aggregatedEntitlementsResponseSchema: Schema<AggregatedEntitlementsResponse> = lazy(
  () =>
    expandoObject({
      subscriptionId: ['subscription_id', number()],
      customerId: ['customer_id', number()],
      status: ['status', string()],
      entitlements: ['entitlements', array(aggregatedEntitlementSchema)],
    })
);
