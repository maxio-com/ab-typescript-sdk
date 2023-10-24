/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema } from '../schema';
import {
  IssueServiceCredit,
  issueServiceCreditSchema,
} from './issueServiceCredit';

export interface IssueServiceCreditRequest {
  serviceCredit: IssueServiceCredit;
}

export const issueServiceCreditRequestSchema: Schema<IssueServiceCreditRequest> = object(
  { serviceCredit: ['service_credit', lazy(() => issueServiceCreditSchema)] }
);
