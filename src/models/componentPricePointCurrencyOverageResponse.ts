/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema.js';
import {
  CurrencyOveragePrices,
  currencyOveragePricesSchema,
} from './currencyOveragePrices.js';

export interface ComponentPricePointCurrencyOverageResponse {
  /** Extends a component price point with currency overage prices. */
  pricePoint: CurrencyOveragePrices;
  [key: string]: unknown;
}

export const componentPricePointCurrencyOverageResponseSchema: Schema<ComponentPricePointCurrencyOverageResponse> = lazy(
  () =>
    expandoObject({ pricePoint: ['price_point', currencyOveragePricesSchema] })
);
