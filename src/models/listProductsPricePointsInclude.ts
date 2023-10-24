/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for ListProductsPricePointsInclude
 */
export enum ListProductsPricePointsInclude {
  CurrencyPrices = 'currency_prices',
}

/**
 * Schema for ListProductsPricePointsInclude
 */
export const listProductsPricePointsIncludeSchema: Schema<ListProductsPricePointsInclude> = stringEnum(ListProductsPricePointsInclude);
