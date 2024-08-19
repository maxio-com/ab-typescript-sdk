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
} from '../schema';

export interface ComponentCostDataRateTier {
  startingQuantity?: number;
  endingQuantity?: number | null;
  quantity?: string;
  unitPrice?: string;
  amount?: string;
  [key: string]: unknown;
}

export const componentCostDataRateTierSchema: Schema<ComponentCostDataRateTier> = expandoObject(
  {
    startingQuantity: ['starting_quantity', optional(number())],
    endingQuantity: ['ending_quantity', optional(nullable(number()))],
    quantity: ['quantity', optional(string())],
    unitPrice: ['unit_price', optional(string())],
    amount: ['amount', optional(string())],
  }
);
