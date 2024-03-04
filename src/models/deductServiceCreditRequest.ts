/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema';
import {
  DeductServiceCredit,
  deductServiceCreditSchema,
} from './deductServiceCredit';

export interface DeductServiceCreditRequest {
  deduction: DeductServiceCredit;
  [key: string]: unknown;
}

export const deductServiceCreditRequestSchema: Schema<DeductServiceCreditRequest> = expandoObject(
  { deduction: ['deduction', lazy(() => deductServiceCreditSchema)] }
);
