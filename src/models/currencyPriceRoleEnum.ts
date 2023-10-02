/**
 * Maxio Advanced Billing formerly Chargify APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for CurrencyPriceRoleEnum
 */
export enum CurrencyPriceRoleEnum {
  Baseline = 'baseline',
  Trial = 'trial',
  Initial = 'initial',
}

/**
 * Schema for CurrencyPriceRoleEnum
 */
export const currencyPriceRoleEnumSchema: Schema<CurrencyPriceRoleEnum> = stringEnum(CurrencyPriceRoleEnum);
