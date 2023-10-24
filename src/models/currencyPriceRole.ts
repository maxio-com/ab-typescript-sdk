/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for CurrencyPriceRole
 */
export enum CurrencyPriceRole {
  Baseline = 'baseline',
  Trial = 'trial',
  Initial = 'initial',
}

/**
 * Schema for CurrencyPriceRole
 */
export const currencyPriceRoleSchema: Schema<CurrencyPriceRole> = stringEnum(CurrencyPriceRole);
