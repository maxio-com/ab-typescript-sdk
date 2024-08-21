/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for ItemCategory
 */
export enum ItemCategory {
  EnumBusinessSoftware = 'Business Software',
  EnumConsumerSoftware = 'Consumer Software',
  EnumDigitalServices = 'Digital Services',
  EnumPhysicalGoods = 'Physical Goods',
  Other = 'Other',
}

/**
 * Schema for ItemCategory
 */
export const itemCategorySchema: Schema<ItemCategory> = stringEnum(
  ItemCategory
);
