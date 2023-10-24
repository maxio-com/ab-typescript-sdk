/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, optional, Schema, string } from '../schema';

export interface ComponentAllocationErrorItem {
  componentId?: number;
  message?: string;
  kind?: string;
  on?: string;
}

export const componentAllocationErrorItemSchema: Schema<ComponentAllocationErrorItem> = object(
  {
    componentId: ['component_id', optional(number())],
    message: ['message', optional(string())],
    kind: ['kind', optional(string())],
    on: ['on', optional(string())],
  }
);
