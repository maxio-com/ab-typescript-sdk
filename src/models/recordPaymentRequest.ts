/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema';
import { CreatePayment, createPaymentSchema } from './createPayment';

export interface RecordPaymentRequest {
  payment: CreatePayment;
  [key: string]: unknown;
}

export const recordPaymentRequestSchema: Schema<RecordPaymentRequest> = expandoObject(
  { payment: ['payment', lazy(() => createPaymentSchema)] }
);
