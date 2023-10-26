/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { nullable, number, object, optional, Schema, string } from '../schema';

export interface Customer1 {
  chargifyId?: number;
  firstName?: string;
  lastName?: string;
  organization?: string | null;
  email?: string;
  vatNumber?: string | null;
  reference?: string | null;
}

export const customer1Schema: Schema<Customer1> = object({
  chargifyId: ['chargify_id', optional(number())],
  firstName: ['first_name', optional(string())],
  lastName: ['last_name', optional(string())],
  organization: ['organization', optional(nullable(string()))],
  email: ['email', optional(string())],
  vatNumber: ['vat_number', optional(nullable(string()))],
  reference: ['reference', optional(nullable(string()))],
});
