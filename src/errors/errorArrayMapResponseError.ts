/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '../core';

/**
 * Creates an instance of ErrorArrayMapResponse
 */
interface ErrorArrayMapResponse {
  errors?: Record<string, unknown>;
  [key: string]: unknown;
}

export class ErrorArrayMapResponseError extends ApiError<ErrorArrayMapResponse> {}
