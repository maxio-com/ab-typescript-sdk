/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for ListProductsInclude
 */
export enum ListProductsInclude {
  PrepaidProductPricePoint = 'prepaid_product_price_point',
}

/**
 * Schema for ListProductsInclude
 */
export const listProductsIncludeSchema: Schema<ListProductsInclude> = stringEnum(ListProductsInclude);
