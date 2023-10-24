/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, object, optional, Schema, string } from '../schema';

export interface SendInvoiceRequest {
  recipientEmails?: string[];
  ccRecipientEmails?: string[];
  bccRecipientEmails?: string[];
}

export const sendInvoiceRequestSchema: Schema<SendInvoiceRequest> = object({
  recipientEmails: ['recipient_emails', optional(array(string()))],
  ccRecipientEmails: ['cc_recipient_emails', optional(array(string()))],
  bccRecipientEmails: ['bcc_recipient_emails', optional(array(string()))],
});
