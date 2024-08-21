/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, expandoObject, optional, Schema, string } from '../schema';

export interface PayerError {
  lastName?: string[];
  firstName?: string[];
  email?: string[];
  [key: string]: unknown;
}

export const payerErrorSchema: Schema<PayerError> = expandoObject({
  lastName: ['last_name', optional(array(string()))],
  firstName: ['first_name', optional(array(string()))],
  email: ['email', optional(array(string()))],
});
