/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema } from '../schema';
import { CreatePrepayment, createPrepaymentSchema } from './createPrepayment';

export interface CreatePrepaymentRequest {
  prepayment: CreatePrepayment;
}

export const createPrepaymentRequestSchema: Schema<CreatePrepaymentRequest> = object(
  { prepayment: ['prepayment', lazy(() => createPrepaymentSchema)] }
);
