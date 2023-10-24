/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema } from '../schema';
import { CreateReasonCode, createReasonCodeSchema } from './createReasonCode';

export interface CreateReasonCodeRequest {
  reasonCode: CreateReasonCode;
}

export const createReasonCodeRequestSchema: Schema<CreateReasonCodeRequest> = object(
  { reasonCode: ['reason_code', lazy(() => createReasonCodeSchema)] }
);
