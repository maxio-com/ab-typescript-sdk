/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '../core.js';
import { RefundPrepaymentBaseRefundError } from '../models/refundPrepaymentBaseRefundError.js';

/**
 * Creates an instance of RefundPrepaymentBaseErrorsResponse
 */
interface RefundPrepaymentBaseErrorsResponse {
  errors?: RefundPrepaymentBaseRefundError;
  [key: string]: unknown;
}

export class RefundPrepaymentBaseErrorsResponseError extends ApiError<
  RefundPrepaymentBaseErrorsResponse
> {}
