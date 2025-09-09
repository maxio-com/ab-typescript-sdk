/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema.js';
import {
  CreatedPrepayment,
  createdPrepaymentSchema,
} from './createdPrepayment.js';

export interface CreatePrepaymentResponse {
  prepayment: CreatedPrepayment;
  [key: string]: unknown;
}

export const createPrepaymentResponseSchema: Schema<CreatePrepaymentResponse> = expandoObject(
  { prepayment: ['prepayment', lazy(() => createdPrepaymentSchema)] }
);
