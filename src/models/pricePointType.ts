/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for PricePointType
 */
export enum PricePointType {
  Catalog = 'catalog',
  Default = 'default',
  Custom = 'custom',
}

/**
 * Schema for PricePointType
 */
export const pricePointTypeSchema: Schema<PricePointType> = stringEnum(PricePointType);
