/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  boolean,
  lazy,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import { CurrencyPrice, currencyPriceSchema } from './currencyPrice';

export interface OfferItem {
  componentId?: number;
  pricePointId?: number;
  startingQuantity?: string;
  editable?: boolean;
  componentUnitPrice?: string;
  componentName?: string;
  pricePointName?: string;
  currencyPrices?: CurrencyPrice[];
}

export const offerItemSchema: Schema<OfferItem> = object({
  componentId: ['component_id', optional(number())],
  pricePointId: ['price_point_id', optional(number())],
  startingQuantity: ['starting_quantity', optional(string())],
  editable: ['editable', optional(boolean())],
  componentUnitPrice: ['component_unit_price', optional(string())],
  componentName: ['component_name', optional(string())],
  pricePointName: ['price_point_name', optional(string())],
  currencyPrices: [
    'currency_prices',
    optional(array(lazy(() => currencyPriceSchema))),
  ],
});
