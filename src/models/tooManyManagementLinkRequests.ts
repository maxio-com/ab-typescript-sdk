/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, Schema, string } from '../schema.js';

export interface TooManyManagementLinkRequests {
  error: string;
  newLinkAvailableAt: string;
  [key: string]: unknown;
}

export const tooManyManagementLinkRequestsSchema: Schema<TooManyManagementLinkRequests> = expandoObject(
  {
    error: ['error', string()],
    newLinkAvailableAt: ['new_link_available_at', string()],
  }
);
