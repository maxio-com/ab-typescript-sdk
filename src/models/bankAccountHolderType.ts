/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for BankAccountHolderType
 */
export enum BankAccountHolderType {
  Personal = 'personal',
  Business = 'business',
}

/**
 * Schema for BankAccountHolderType
 */
export const bankAccountHolderTypeSchema: Schema<BankAccountHolderType> = stringEnum(BankAccountHolderType);
