/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for BasicDateField
 */
export enum BasicDateField {
  UpdatedAt = 'updated_at',
  CreatedAt = 'created_at',
}

/**
 * Schema for BasicDateField
 */
export const basicDateFieldSchema: Schema<BasicDateField> = stringEnum(BasicDateField);
