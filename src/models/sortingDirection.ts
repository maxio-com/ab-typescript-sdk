/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for SortingDirection
 */
export enum SortingDirection {
  Asc = 'asc',
  Desc = 'desc',
}

/**
 * Schema for SortingDirection
 */
export const sortingDirectionSchema: Schema<SortingDirection> = stringEnum(
  SortingDirection
);
