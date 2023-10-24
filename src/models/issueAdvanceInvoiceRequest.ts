/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, object, optional, Schema } from '../schema';

export interface IssueAdvanceInvoiceRequest {
  force?: boolean;
}

export const issueAdvanceInvoiceRequestSchema: Schema<IssueAdvanceInvoiceRequest> = object(
  { force: ['force', optional(boolean())] }
);
