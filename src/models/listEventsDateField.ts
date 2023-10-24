/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for ListEventsDateField
 */
export enum ListEventsDateField {
  CreatedAt = 'created_at',
}

/**
 * Schema for ListEventsDateField
 */
export const listEventsDateFieldSchema: Schema<ListEventsDateField> = stringEnum(ListEventsDateField);
