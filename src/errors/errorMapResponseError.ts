/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '../core';

/**
 * Creates an instance of ErrorMapResponse
 */
interface ErrorMapResponse {
  errors?: Record<string, unknown>;
}

export class ErrorMapResponseError extends ApiError<ErrorMapResponse> {}
