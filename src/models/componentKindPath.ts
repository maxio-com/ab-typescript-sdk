/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for ComponentKindPath
 */
export enum ComponentKindPath {
  MeteredComponents = 'metered_components',
  QuantityBasedComponents = 'quantity_based_components',
  OnOffComponents = 'on_off_components',
  PrepaidUsageComponents = 'prepaid_usage_components',
  EventBasedComponents = 'event_based_components',
}

/**
 * Schema for ComponentKindPath
 */
export const componentKindPathSchema: Schema<ComponentKindPath> = stringEnum(ComponentKindPath);
