/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '../core';

/**
 * Creates an instance of ErrorStringMapResponse
 */
interface ErrorStringMapResponse {
  errors?: Record<string, string>;
  [key: string]: unknown;
}

export class ErrorStringMapResponseError extends ApiError<
  ErrorStringMapResponse
> {}
