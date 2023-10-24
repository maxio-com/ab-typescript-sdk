/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema } from '../schema';
import { UpdateReasonCode, updateReasonCodeSchema } from './updateReasonCode';

export interface UpdateReasonCodeRequest {
  reasonCode: UpdateReasonCode;
}

export const updateReasonCodeRequestSchema: Schema<UpdateReasonCodeRequest> = object(
  { reasonCode: ['reason_code', lazy(() => updateReasonCodeSchema)] }
);
