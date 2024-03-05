/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, number, optional, Schema, string } from '../schema';

export interface ComponentPricePointErrorItem {
  componentId?: number;
  message?: string;
  pricePoint?: number;
  [key: string]: unknown;
}

export const componentPricePointErrorItemSchema: Schema<ComponentPricePointErrorItem> = expandoObject(
  {
    componentId: ['component_id', optional(number())],
    message: ['message', optional(string())],
    pricePoint: ['price_point', optional(number())],
  }
);
