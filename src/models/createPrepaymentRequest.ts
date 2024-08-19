/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema';
import { CreatePrepayment, createPrepaymentSchema } from './createPrepayment';

export interface CreatePrepaymentRequest {
  prepayment: CreatePrepayment;
  [key: string]: unknown;
}

export const createPrepaymentRequestSchema: Schema<CreatePrepaymentRequest> = expandoObject(
  { prepayment: ['prepayment', lazy(() => createPrepaymentSchema)] }
);
