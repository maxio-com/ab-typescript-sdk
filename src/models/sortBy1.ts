/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema.js';

/**
 * Enum for SortBy1
 */
export enum SortBy1 {
  Name = 'name',
  UnitName = 'unit_name',
  UpdatedAt = 'updated_at',
}

/**
 * Schema for SortBy1
 */
export const sortBy1Schema: Schema<SortBy1> = stringEnum(SortBy1);
