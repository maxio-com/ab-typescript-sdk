/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '../core';
import { ProformaError } from '../models/proformaError';

/**
 * Creates an instance of ProformaBadRequestErrorResponse
 */
interface ProformaBadRequestErrorResponse {
  errors?: ProformaError;
}

export class ProformaBadRequestErrorResponseError extends ApiError<ProformaBadRequestErrorResponse> {}
