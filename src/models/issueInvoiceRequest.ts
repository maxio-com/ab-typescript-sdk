/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  FailedPaymentAction,
  failedPaymentActionSchema,
} from './failedPaymentAction';

export interface IssueInvoiceRequest {
  /**
   * Action taken when payment for an invoice fails:
   * - `leave_open_invoice` - prepayments and credits applied to invoice; invoice status set to "open"; email sent to the customer for the issued invoice (if setting applies); payment failure recorded in the invoice history. This is the default option.
   * - `rollback_to_pending` - prepayments and credits not applied; invoice remains in "pending" status; no email sent to the customer; payment failure recorded in the invoice history.
   * - `initiate_dunning` - prepayments and credits applied to the invoice; invoice status set to "open"; email sent to the customer for the issued invoice (if setting applies); payment failure recorded in the invoice history; subscription will  most likely go into "past_due" or "canceled" state (depending upon net terms and dunning settings).
   */
  onFailedPayment?: FailedPaymentAction;
}

export const issueInvoiceRequestSchema: Schema<IssueInvoiceRequest> = object({
  onFailedPayment: ['on_failed_payment', optional(failedPaymentActionSchema)],
});
