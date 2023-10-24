/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '../core';

/**
 * Creates an instance of ErrorListResponse
 */
interface ErrorListResponse {
  errors: string[];
}

export class ErrorListResponseError extends ApiError<ErrorListResponse> {}
