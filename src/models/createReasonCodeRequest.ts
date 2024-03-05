/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema';
import { CreateReasonCode, createReasonCodeSchema } from './createReasonCode';

export interface CreateReasonCodeRequest {
  reasonCode: CreateReasonCode;
  [key: string]: unknown;
}

export const createReasonCodeRequestSchema: Schema<CreateReasonCodeRequest> = expandoObject(
  { reasonCode: ['reason_code', lazy(() => createReasonCodeSchema)] }
);
