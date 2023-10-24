/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '../core';
import {
  RefundPrepaymentBaseRefundError,
} from '../models/refundPrepaymentBaseRefundError';

/**
 * Creates an instance of RefundPrepaymentBaseErrorsResponse
 */
interface RefundPrepaymentBaseErrorsResponse {
  errors?: RefundPrepaymentBaseRefundError;
}

export class RefundPrepaymentBaseErrorsResponseError extends ApiError<RefundPrepaymentBaseErrorsResponse> {}
