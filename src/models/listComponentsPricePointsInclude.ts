/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for ListComponentsPricePointsInclude
 */
export enum ListComponentsPricePointsInclude {
  CurrencyPrices = 'currency_prices',
}

/**
 * Schema for ListComponentsPricePointsInclude
 */
export const listComponentsPricePointsIncludeSchema: Schema<ListComponentsPricePointsInclude> = stringEnum(ListComponentsPricePointsInclude);
