/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, object, optional, Schema, string } from '../schema';

export interface PayerError {
  lastName?: string[];
  firstName?: string[];
  email?: string[];
}

export const payerErrorSchema: Schema<PayerError> = object({
  lastName: ['last_name', optional(array(string()))],
  firstName: ['first_name', optional(array(string()))],
  email: ['email', optional(array(string()))],
});
