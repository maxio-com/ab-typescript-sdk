/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for ListPrepaymentDateField
 */
export enum ListPrepaymentDateField {
  CreatedAt = 'created_at',
  ApplicationAt = 'application_at',
}

/**
 * Schema for ListPrepaymentDateField
 */
export const listPrepaymentDateFieldSchema: Schema<ListPrepaymentDateField> = stringEnum(
  ListPrepaymentDateField
);
