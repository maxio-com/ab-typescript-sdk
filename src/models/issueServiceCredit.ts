/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, optional, Schema, string } from '../schema';
import {
  IssueServiceCreditAmount,
  issueServiceCreditAmountSchema,
} from './containers/issueServiceCreditAmount';

export interface IssueServiceCredit {
  amount: IssueServiceCreditAmount;
  memo?: string;
  [key: string]: unknown;
}

export const issueServiceCreditSchema: Schema<IssueServiceCredit> = expandoObject(
  {
    amount: ['amount', issueServiceCreditAmountSchema],
    memo: ['memo', optional(string())],
  }
);
