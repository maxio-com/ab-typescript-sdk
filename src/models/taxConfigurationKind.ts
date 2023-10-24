/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for TaxConfigurationKind
 */
export enum TaxConfigurationKind {
  Custom = 'custom',
  EnumManagedAvalara = 'managed avalara',
  EnumLinkedAvalara = 'linked avalara',
  EnumDigitalRiver = 'digital river',
}

/**
 * Schema for TaxConfigurationKind
 */
export const taxConfigurationKindSchema: Schema<TaxConfigurationKind> = stringEnum(TaxConfigurationKind);
