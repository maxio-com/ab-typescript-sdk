/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, optional, Schema, string } from '../schema';
import {
  DeductServiceCreditAmount,
  deductServiceCreditAmountSchema,
} from './containers/deductServiceCreditAmount';

export interface DeductServiceCredit {
  amount: DeductServiceCreditAmount;
  memo?: string;
  [key: string]: unknown;
}

export const deductServiceCreditSchema: Schema<DeductServiceCredit> = expandoObject(
  {
    amount: ['amount', deductServiceCreditAmountSchema],
    memo: ['memo', optional(string())],
  }
);
