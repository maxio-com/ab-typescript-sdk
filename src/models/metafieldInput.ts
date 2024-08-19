/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for MetafieldInput
 */
export enum MetafieldInput {
  BalanceTracker = 'balance_tracker',
  Text = 'text',
  Radio = 'radio',
  Dropdown = 'dropdown',
}

/**
 * Schema for MetafieldInput
 */
export const metafieldInputSchema: Schema<MetafieldInput> = stringEnum(
  MetafieldInput
);
