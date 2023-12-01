/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, Schema } from '../schema';
import { CurrencyPrice, currencyPriceSchema } from './currencyPrice';

export interface ProductPricePointCurrencyPrice {
  currencyPrices: CurrencyPrice[];
}

export const productPricePointCurrencyPriceSchema: Schema<ProductPricePointCurrencyPrice> = object(
  {
    currencyPrices: ['currency_prices', array(lazy(() => currencyPriceSchema))],
  }
);
