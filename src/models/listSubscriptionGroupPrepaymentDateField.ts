/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for ListSubscriptionGroupPrepaymentDateField
 */
export enum ListSubscriptionGroupPrepaymentDateField {
  CreatedAt = 'created_at',
  ApplicationAt = 'application_at',
}

/**
 * Schema for ListSubscriptionGroupPrepaymentDateField
 */
export const listSubscriptionGroupPrepaymentDateFieldSchema: Schema<ListSubscriptionGroupPrepaymentDateField> = stringEnum(ListSubscriptionGroupPrepaymentDateField);
