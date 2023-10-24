/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for DiscountType
 */
export enum DiscountType {
  Amount = 'amount',
  Percent = 'percent',
}

/**
 * Schema for DiscountType
 */
export const discountTypeSchema: Schema<DiscountType> = stringEnum(DiscountType);
