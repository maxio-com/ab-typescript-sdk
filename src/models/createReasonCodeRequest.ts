/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema.js';
import {
  CreateReasonCode,
  createReasonCodeSchema,
} from './createReasonCode.js';

export interface CreateReasonCodeRequest {
  reasonCode: CreateReasonCode;
  [key: string]: unknown;
}

export const createReasonCodeRequestSchema: Schema<CreateReasonCodeRequest> = expandoObject(
  { reasonCode: ['reason_code', lazy(() => createReasonCodeSchema)] }
);
