/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import {
  AllocationExpirationDate,
  allocationExpirationDateSchema,
} from './allocationExpirationDate';

export interface UpdateAllocationExpirationDate {
  allocation?: AllocationExpirationDate;
}

export const updateAllocationExpirationDateSchema: Schema<UpdateAllocationExpirationDate> = object(
  {
    allocation: [
      'allocation',
      optional(lazy(() => allocationExpirationDateSchema)),
    ],
  }
);
