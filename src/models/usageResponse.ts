/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema } from '../schema';
import { Usage, usageSchema } from './usage';

export interface UsageResponse {
  usage: Usage;
}

export const usageResponseSchema: Schema<UsageResponse> = object({
  usage: ['usage', lazy(() => usageSchema)],
});
