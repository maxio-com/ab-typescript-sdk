/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for ListSubscriptionComponentsSort
 */
export enum ListSubscriptionComponentsSort {
  Id = 'id',
  UpdatedAt = 'updated_at',
}

/**
 * Schema for ListSubscriptionComponentsSort
 */
export const listSubscriptionComponentsSortSchema: Schema<ListSubscriptionComponentsSort> = stringEnum(
  ListSubscriptionComponentsSort
);
