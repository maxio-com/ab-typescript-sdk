/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '../core';
import {
  RefundPrepaymentAggregatedError,
} from '../models/refundPrepaymentAggregatedError';

/**
 * Creates an instance of RefundPrepaymentAggregatedErrorsResponse
 */
interface RefundPrepaymentAggregatedErrorsResponse {
  errors?: RefundPrepaymentAggregatedError;
}

export class RefundPrepaymentAggregatedErrorsResponseError extends ApiError<RefundPrepaymentAggregatedErrorsResponse> {}
