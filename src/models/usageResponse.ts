/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema.js';
import { Usage, usageSchema } from './usage.js';

export interface UsageResponse {
  usage: Usage;
  [key: string]: unknown;
}

export const usageResponseSchema: Schema<UsageResponse> = lazy(() =>
  expandoObject({ usage: ['usage', usageSchema] })
);
