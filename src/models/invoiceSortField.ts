/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for InvoiceSortField
 */
export enum InvoiceSortField {
  Status = 'status',
  TotalAmount = 'total_amount',
  DueAmount = 'due_amount',
  CreatedAt = 'created_at',
  UpdatedAt = 'updated_at',
  IssueDate = 'issue_date',
  DueDate = 'due_date',
  Number = 'number',
}

/**
 * Schema for InvoiceSortField
 */
export const invoiceSortFieldSchema: Schema<InvoiceSortField> = stringEnum(InvoiceSortField);
