/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, expandoObject, lazy, number, optional, Schema } from '../schema';
import { IntervalUnit, intervalUnitSchema } from './intervalUnit';
import { Price, priceSchema } from './price';
import { PricingScheme, pricingSchemeSchema } from './pricingScheme';

/** Create or update custom pricing unique to the subscription. Used in place of `price_point_id`. */
export interface ComponentCustomPrice {
  /** Omit for On/Off components */
  pricingScheme?: PricingScheme;
  /** The numerical interval. i.e. an interval of ‘30’ coupled with an interval_unit of day would mean this component price point would renew every 30 days. This property is only available for sites with Multifrequency enabled. */
  interval?: number;
  /** A string representing the interval unit for this component price point, either month or day. This property is only available for sites with Multifrequency enabled. */
  intervalUnit?: IntervalUnit;
  /** On/off components only need one price bracket starting at 1 */
  prices?: Price[];
  [key: string]: unknown;
}

export const componentCustomPriceSchema: Schema<ComponentCustomPrice> = expandoObject(
  {
    pricingScheme: ['pricing_scheme', optional(pricingSchemeSchema)],
    interval: ['interval', optional(number())],
    intervalUnit: ['interval_unit', optional(intervalUnitSchema)],
    prices: ['prices', optional(array(lazy(() => priceSchema)))],
  }
);
