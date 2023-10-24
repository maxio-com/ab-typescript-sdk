/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema, string } from '../schema';
import { UpdatePrice, updatePriceSchema } from './updatePrice';

export interface UpdateComponentPricePoint {
  name?: string;
  prices?: UpdatePrice[];
}

export const updateComponentPricePointSchema: Schema<UpdateComponentPricePoint> = object(
  {
    name: ['name', optional(string())],
    prices: ['prices', optional(array(lazy(() => updatePriceSchema)))],
  }
);
