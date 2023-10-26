/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';

export interface TooManyManagementLinkRequests {
  error: string;
  newLinkAvailableAt: string;
}

export const tooManyManagementLinkRequestsSchema: Schema<TooManyManagementLinkRequests> = object(
  {
    error: ['error', string()],
    newLinkAvailableAt: ['new_link_available_at', string()],
  }
);
