/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema';
import { CreateUsage, createUsageSchema } from './createUsage';

export interface CreateUsageRequest {
  usage: CreateUsage;
  [key: string]: unknown;
}

export const createUsageRequestSchema: Schema<CreateUsageRequest> = expandoObject(
  { usage: ['usage', lazy(() => createUsageSchema)] }
);
