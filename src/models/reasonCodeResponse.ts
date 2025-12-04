/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema.js';
import { ReasonCode, reasonCodeSchema } from './reasonCode.js';

export interface ReasonCodeResponse {
  reasonCode: ReasonCode;
  [key: string]: unknown;
}

export const reasonCodeResponseSchema: Schema<ReasonCodeResponse> = lazy(() =>
  expandoObject({ reasonCode: ['reason_code', reasonCodeSchema] })
);
