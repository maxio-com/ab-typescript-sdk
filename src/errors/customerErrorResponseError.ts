/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '../core';
import {
  CustomerErrorResponseErrors,
} from '../models/containers/customerErrorResponseErrors';

/**
 * Creates an instance of CustomerErrorResponse
 */
interface CustomerErrorResponse {
  errors?: CustomerErrorResponseErrors;
}

export class CustomerErrorResponseError extends ApiError<CustomerErrorResponse> {}
