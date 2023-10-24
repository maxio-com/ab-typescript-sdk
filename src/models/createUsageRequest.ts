/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema } from '../schema';
import { CreateUsage, createUsageSchema } from './createUsage';

export interface CreateUsageRequest {
  usage: CreateUsage;
}

export const createUsageRequestSchema: Schema<CreateUsageRequest> = object({
  usage: ['usage', lazy(() => createUsageSchema)],
});
