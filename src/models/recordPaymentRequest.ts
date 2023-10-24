/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema } from '../schema';
import { CreatePayment, createPaymentSchema } from './createPayment';

export interface RecordPaymentRequest {
  payment: CreatePayment;
}

export const recordPaymentRequestSchema: Schema<RecordPaymentRequest> = object({
  payment: ['payment', lazy(() => createPaymentSchema)],
});
