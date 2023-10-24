/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for InvoiceDateField
 */
export enum InvoiceDateField {
  CreatedAt = 'created_at',
  DueDate = 'due_date',
  IssueDate = 'issue_date',
  UpdatedAt = 'updated_at',
  PaidDate = 'paid_date',
}

/**
 * Schema for InvoiceDateField
 */
export const invoiceDateFieldSchema: Schema<InvoiceDateField> = stringEnum(InvoiceDateField);
