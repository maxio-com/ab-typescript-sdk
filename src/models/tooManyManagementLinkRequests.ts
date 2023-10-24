/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface TooManyManagementLinkRequests {
  error?: string;
  newLinkAvailableAt?: string;
}

export const tooManyManagementLinkRequestsSchema: Schema<TooManyManagementLinkRequests> = object(
  {
    error: ['error', optional(string())],
    newLinkAvailableAt: ['new_link_available_at', optional(string())],
  }
);
