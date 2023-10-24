/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '../core';
import { CustomerError } from '../models/customerError';

/**
 * Creates an instance of CustomersJson422
 */
interface CustomersJson422 {
  errors?: CustomerError;
}

export class CustomersJson422Error extends ApiError<CustomersJson422> {}
