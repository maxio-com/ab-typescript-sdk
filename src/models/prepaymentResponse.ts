/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema } from '../schema';
import {
  PrepaymentPrepaymentResponse,
  prepaymentPrepaymentResponseSchema,
} from './prepaymentPrepaymentResponse';

export interface PrepaymentResponse {
  prepayment: PrepaymentPrepaymentResponse;
}

export const prepaymentResponseSchema: Schema<PrepaymentResponse> = object({
  prepayment: ['prepayment', lazy(() => prepaymentPrepaymentResponseSchema)],
});
