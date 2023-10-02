/**
 * Maxio Advanced Billing formerly Chargify APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for ItemCategoryEnum
 */
export enum ItemCategoryEnum {
  EnumBusinessSoftware = 'Business Software',
  EnumConsumerSoftware = 'Consumer Software',
  EnumDigitalServices = 'Digital Services',
  EnumPhysicalGoods = 'Physical Goods',
  Other = 'Other',
}

/**
 * Schema for ItemCategoryEnum
 */
export const itemCategoryEnumSchema: Schema<ItemCategoryEnum> = stringEnum(ItemCategoryEnum);
