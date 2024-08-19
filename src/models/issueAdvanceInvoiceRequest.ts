/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, expandoObject, optional, Schema } from '../schema';

export interface IssueAdvanceInvoiceRequest {
  force?: boolean;
  [key: string]: unknown;
}

export const issueAdvanceInvoiceRequestSchema: Schema<IssueAdvanceInvoiceRequest> = expandoObject(
  { force: ['force', optional(boolean())] }
);
