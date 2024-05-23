/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  expandoObject,
  nullable,
  number,
  optional,
  Schema,
  string,
} from '../schema';

export interface Customer {
  chargifyId?: number | null;
  firstName?: string;
  lastName?: string;
  organization?: string | null;
  email?: string;
  vatNumber?: string | null;
  reference?: string | null;
  [key: string]: unknown;
}

export const customerSchema: Schema<Customer> = expandoObject({
  chargifyId: ['chargify_id', optional(nullable(number()))],
  firstName: ['first_name', optional(string())],
  lastName: ['last_name', optional(string())],
  organization: ['organization', optional(nullable(string()))],
  email: ['email', optional(string())],
  vatNumber: ['vat_number', optional(nullable(string()))],
  reference: ['reference', optional(nullable(string()))],
});
