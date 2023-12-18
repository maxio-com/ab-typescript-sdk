/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  lazy,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import { IntervalUnit, intervalUnitSchema } from './intervalUnit';
import { UpdatePrice, updatePriceSchema } from './updatePrice';

export interface UpdateComponentPricePoint {
  name?: string;
  /** The numerical interval. i.e. an interval of ‘30’ coupled with an interval_unit of day would mean this component price point would renew every 30 days. This property is only available for sites with Multifrequency enabled. */
  interval?: number;
  /** A string representing the interval unit for this component price point, either month or day. This property is only available for sites with Multifrequency enabled. */
  intervalUnit?: IntervalUnit;
  prices?: UpdatePrice[];
}

export const updateComponentPricePointSchema: Schema<UpdateComponentPricePoint> = object(
  {
    name: ['name', optional(string())],
    interval: ['interval', optional(number())],
    intervalUnit: ['interval_unit', optional(intervalUnitSchema)],
    prices: ['prices', optional(array(lazy(() => updatePriceSchema)))],
  }
);
