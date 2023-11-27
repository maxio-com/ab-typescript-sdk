/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for PricePointType2
 */
export enum PricePointType2 {
  Catalog = 'catalog',
  Default = 'default',
  Custom = 'custom',
}

/**
 * Schema for PricePointType2
 */
export const pricePointType2Schema: Schema<PricePointType2> = stringEnum(PricePointType2);
