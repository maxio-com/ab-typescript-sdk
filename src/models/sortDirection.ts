/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema.js';

/**
 * Enum for SortDirection
 */
export enum SortDirection {
  Asc = 'asc',
  Desc = 'desc',
}

/**
 * Schema for SortDirection
 */
export const sortDirectionSchema: Schema<SortDirection> = stringEnum(
  SortDirection
);
