/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '../core';

/**
 * Creates an instance of SingleStringErrorResponse
 */
interface SingleStringErrorResponse {
  errors?: string;
}

export class SingleStringErrorResponseError extends ApiError<SingleStringErrorResponse> {}
