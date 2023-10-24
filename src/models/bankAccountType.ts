/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for BankAccountType
 */
export enum BankAccountType {
  Checking = 'checking',
  Savings = 'savings',
}

/**
 * Schema for BankAccountType
 */
export const bankAccountTypeSchema: Schema<BankAccountType> = stringEnum(BankAccountType);
