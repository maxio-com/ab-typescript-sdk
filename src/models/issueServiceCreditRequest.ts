/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema.js';
import {
  IssueServiceCredit,
  issueServiceCreditSchema,
} from './issueServiceCredit.js';

export interface IssueServiceCreditRequest {
  serviceCredit: IssueServiceCredit;
  [key: string]: unknown;
}

export const issueServiceCreditRequestSchema: Schema<IssueServiceCreditRequest> = expandoObject(
  { serviceCredit: ['service_credit', lazy(() => issueServiceCreditSchema)] }
);
