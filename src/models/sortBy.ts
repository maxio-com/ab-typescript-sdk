/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema.js';

/**
 * Enum for SortBy
 */
export enum SortBy {
  Name = 'name',
  UpdatedAt = 'updated_at',
  Kind = 'kind',
  ValueType = 'value_type',
}

/**
 * Schema for SortBy
 */
export const sortBySchema: Schema<SortBy> = stringEnum(SortBy);
