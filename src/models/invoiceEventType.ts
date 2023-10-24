/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for InvoiceEventType
 */
export enum InvoiceEventType {
  IssueInvoice = 'issue_invoice',
  ApplyCreditNote = 'apply_credit_note',
  ApplyPayment = 'apply_payment',
  ApplyDebitNote = 'apply_debit_note',
  RefundInvoice = 'refund_invoice',
  VoidInvoice = 'void_invoice',
  VoidRemainder = 'void_remainder',
  BackportInvoice = 'backport_invoice',
  ChangeInvoiceStatus = 'change_invoice_status',
  ChangeInvoiceCollectionMethod = 'change_invoice_collection_method',
  RemovePayment = 'remove_payment',
}

/**
 * Schema for InvoiceEventType
 */
export const invoiceEventTypeSchema: Schema<InvoiceEventType> = stringEnum(InvoiceEventType);
