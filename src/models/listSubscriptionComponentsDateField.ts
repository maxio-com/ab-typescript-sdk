/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for ListSubscriptionComponentsDateField
 */
export enum ListSubscriptionComponentsDateField {
  UpdatedAt = 'updated_at',
}

/**
 * Schema for ListSubscriptionComponentsDateField
 */
export const listSubscriptionComponentsDateFieldSchema: Schema<ListSubscriptionComponentsDateField> = stringEnum(ListSubscriptionComponentsDateField);
