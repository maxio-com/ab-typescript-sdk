/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, optional, Schema } from '../schema';
import {
  AllocationExpirationDate,
  allocationExpirationDateSchema,
} from './allocationExpirationDate';

export interface UpdateAllocationExpirationDate {
  allocation?: AllocationExpirationDate;
  [key: string]: unknown;
}

export const updateAllocationExpirationDateSchema: Schema<UpdateAllocationExpirationDate> = expandoObject(
  {
    allocation: [
      'allocation',
      optional(lazy(() => allocationExpirationDateSchema)),
    ],
  }
);
