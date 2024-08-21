/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  boolean,
  expandoObject,
  lazy,
  nullable,
  number,
  optional,
  Schema,
  string,
} from '../schema';
import { CurrencyPrice, currencyPriceSchema } from './currencyPrice';
import { IntervalUnit, intervalUnitSchema } from './intervalUnit';

export interface OfferItem {
  componentId?: number;
  pricePointId?: number;
  startingQuantity?: string;
  editable?: boolean;
  componentUnitPrice?: string;
  componentName?: string;
  pricePointName?: string;
  currencyPrices?: CurrencyPrice[];
  /** The numerical interval. i.e. an interval of '30' coupled with an interval_unit of day would mean this component price point would renew every 30 days. This property is only available for sites with Multifrequency enabled. */
  interval?: number;
  /** A string representing the interval unit for this component price point, either month or day. This property is only available for sites with Multifrequency enabled. */
  intervalUnit?: IntervalUnit | null;
  [key: string]: unknown;
}

export const offerItemSchema: Schema<OfferItem> = expandoObject({
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
  interval: ['interval', optional(number())],
  intervalUnit: ['interval_unit', optional(nullable(intervalUnitSchema))],
});
