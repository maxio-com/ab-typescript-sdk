/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, optional, Schema, string } from '../schema';

export interface AllocationExpirationDate {
  expiresAt?: string;
  [key: string]: unknown;
}

export const allocationExpirationDateSchema: Schema<AllocationExpirationDate> = expandoObject(
  { expiresAt: ['expires_at', optional(string())] }
);
