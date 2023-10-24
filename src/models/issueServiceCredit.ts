/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema, string } from '../schema';
import {
  IssueServiceCreditAmount,
  issueServiceCreditAmountSchema,
} from './containers/issueServiceCreditAmount';

export interface IssueServiceCredit {
  amount: IssueServiceCreditAmount;
  memo: string;
}

export const issueServiceCreditSchema: Schema<IssueServiceCredit> = object({
  amount: ['amount', lazy(() => issueServiceCreditAmountSchema)],
  memo: ['memo', string()],
});
