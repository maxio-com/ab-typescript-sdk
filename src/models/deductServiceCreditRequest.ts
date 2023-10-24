/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema } from '../schema';
import {
  DeductServiceCredit,
  deductServiceCreditSchema,
} from './deductServiceCredit';

export interface DeductServiceCreditRequest {
  deduction: DeductServiceCredit;
}

export const deductServiceCreditRequestSchema: Schema<DeductServiceCreditRequest> = object(
  { deduction: ['deduction', lazy(() => deductServiceCreditSchema)] }
);
