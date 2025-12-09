/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema.js';
import {
  DeductServiceCredit,
  deductServiceCreditSchema,
} from './deductServiceCredit.js';

export interface DeductServiceCreditRequest {
  deduction: DeductServiceCredit;
  [key: string]: unknown;
}

export const deductServiceCreditRequestSchema: Schema<DeductServiceCreditRequest> = lazy(
  () => expandoObject({ deduction: ['deduction', deductServiceCreditSchema] })
);
