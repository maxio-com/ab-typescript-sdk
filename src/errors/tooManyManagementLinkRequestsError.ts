/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '../core';
import { TooManyManagementLinkRequests } from '../models/tooManyManagementLinkRequests';

/**
 * Creates an instance of TooManyManagementLinkRequests2
 */
interface TooManyManagementLinkRequests2 {
  errors: TooManyManagementLinkRequests;
  [key: string]: unknown;
}

export class TooManyManagementLinkRequestsError extends ApiError<
  TooManyManagementLinkRequests2
> {}
