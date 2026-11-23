/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema.js';

/**
 * Enum for CreditNoteDateField
 */
export enum CreditNoteDateField {
  IssueDate = 'issue_date',
  AppliedDate = 'applied_date',
  CreatedAt = 'created_at',
  UpdatedAt = 'updated_at',
}

/**
 * Schema for CreditNoteDateField
 */
export const creditNoteDateFieldSchema: Schema<CreditNoteDateField> = stringEnum(
  CreditNoteDateField
);
