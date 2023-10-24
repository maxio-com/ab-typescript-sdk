/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for ListSubscriptionComponentsSubscriptionDateField
 */
export enum ListSubscriptionComponentsSubscriptionDateField {
  UpdatedAt = 'updated_at',
}

/**
 * Schema for ListSubscriptionComponentsSubscriptionDateField
 */
export const listSubscriptionComponentsSubscriptionDateFieldSchema: Schema<ListSubscriptionComponentsSubscriptionDateField> = stringEnum(ListSubscriptionComponentsSubscriptionDateField);
