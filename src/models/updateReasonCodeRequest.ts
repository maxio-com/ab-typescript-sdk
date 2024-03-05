/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema';
import { UpdateReasonCode, updateReasonCodeSchema } from './updateReasonCode';

export interface UpdateReasonCodeRequest {
  reasonCode: UpdateReasonCode;
  [key: string]: unknown;
}

export const updateReasonCodeRequestSchema: Schema<UpdateReasonCodeRequest> = expandoObject(
  { reasonCode: ['reason_code', lazy(() => updateReasonCodeSchema)] }
);
