/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, optional, Schema, string } from '../schema';

export interface InvoicePayerChange {
  firstName?: string;
  lastName?: string;
  organization?: string;
  email?: string;
  [key: string]: unknown;
}

export const invoicePayerChangeSchema: Schema<InvoicePayerChange> = expandoObject(
  {
    firstName: ['first_name', optional(string())],
    lastName: ['last_name', optional(string())],
    organization: ['organization', optional(string())],
    email: ['email', optional(string())],
  }
);
