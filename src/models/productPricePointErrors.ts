/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, expandoObject, optional, Schema, string } from '../schema';

export interface ProductPricePointErrors {
  pricePoint?: string;
  interval?: string[];
  intervalUnit?: string[];
  name?: string[];
  price?: string[];
  priceInCents?: string[];
  [key: string]: unknown;
}

export const productPricePointErrorsSchema: Schema<ProductPricePointErrors> = expandoObject(
  {
    pricePoint: ['price_point', optional(string())],
    interval: ['interval', optional(array(string()))],
    intervalUnit: ['interval_unit', optional(array(string()))],
    name: ['name', optional(array(string()))],
    price: ['price', optional(array(string()))],
    priceInCents: ['price_in_cents', optional(array(string()))],
  }
);
