/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for LineItemKind
 */
export enum LineItemKind {
  Baseline = 'baseline',
  Initial = 'initial',
  Trial = 'trial',
  QuantityBasedComponent = 'quantity_based_component',
  PrepaidUsageComponent = 'prepaid_usage_component',
  OnOffComponent = 'on_off_component',
  MeteredComponent = 'metered_component',
  EventBasedComponent = 'event_based_component',
  Coupon = 'coupon',
  Tax = 'tax',
}

/**
 * Schema for LineItemKind
 */
export const lineItemKindSchema: Schema<LineItemKind> = stringEnum(
  LineItemKind
);
