/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema } from '../schema';
import { ReasonCode, reasonCodeSchema } from './reasonCode';

export interface ReasonCodeResponse {
  reasonCode: ReasonCode;
}

export const reasonCodeResponseSchema: Schema<ReasonCodeResponse> = object({
  reasonCode: ['reason_code', lazy(() => reasonCodeSchema)],
});
