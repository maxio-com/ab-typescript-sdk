/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema.js';

/**
 * Enum for Kind1
 */
export enum Kind1 {
  Grant = 'grant',
  Debit = 'debit',
}

/**
 * Schema for Kind1
 */
export const kind1Schema: Schema<Kind1> = stringEnum(Kind1);
