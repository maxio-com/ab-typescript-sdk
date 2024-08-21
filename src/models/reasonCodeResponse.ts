/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema';
import { ReasonCode, reasonCodeSchema } from './reasonCode';

export interface ReasonCodeResponse {
  reasonCode: ReasonCode;
  [key: string]: unknown;
}

export const reasonCodeResponseSchema: Schema<ReasonCodeResponse> = expandoObject(
  { reasonCode: ['reason_code', lazy(() => reasonCodeSchema)] }
);
