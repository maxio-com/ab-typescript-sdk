/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for ComponentKind
 */
export enum ComponentKind {
  MeteredComponent = 'metered_component',
  QuantityBasedComponent = 'quantity_based_component',
  OnOffComponent = 'on_off_component',
  PrepaidUsageComponent = 'prepaid_usage_component',
  EventBasedComponent = 'event_based_component',
}

/**
 * Schema for ComponentKind
 */
export const componentKindSchema: Schema<ComponentKind> = stringEnum(
  ComponentKind
);
