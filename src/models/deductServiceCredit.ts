/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema, string } from '../schema';
import {
  DeductServiceCreditAmount,
  deductServiceCreditAmountSchema,
} from './containers/deductServiceCreditAmount';

export interface DeductServiceCredit {
  amount: DeductServiceCreditAmount;
  memo: string;
}

export const deductServiceCreditSchema: Schema<DeductServiceCredit> = object({
  amount: ['amount', lazy(() => deductServiceCreditAmountSchema)],
  memo: ['memo', string()],
});
