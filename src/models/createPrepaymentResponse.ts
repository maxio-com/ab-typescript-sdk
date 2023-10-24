/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema } from '../schema';
import { CreatedPrepayment, createdPrepaymentSchema } from './createdPrepayment';

export interface CreatePrepaymentResponse {
  prepayment: CreatedPrepayment;
}

export const createPrepaymentResponseSchema: Schema<CreatePrepaymentResponse> = object(
  { prepayment: ['prepayment', lazy(() => createdPrepaymentSchema)] }
);
