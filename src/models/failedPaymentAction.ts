/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for FailedPaymentAction
 */
export enum FailedPaymentAction {
  LeaveOpenInvoice = 'leave_open_invoice',
  RollbackToPending = 'rollback_to_pending',
  InitiateDunning = 'initiate_dunning',
}

/**
 * Schema for FailedPaymentAction
 */
export const failedPaymentActionSchema: Schema<FailedPaymentAction> = stringEnum(
  FailedPaymentAction
);
