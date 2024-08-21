/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema';
import { BatchJob, batchJobSchema } from './batchJob';

export interface BatchJobResponse {
  batchjob: BatchJob;
  [key: string]: unknown;
}

export const batchJobResponseSchema: Schema<BatchJobResponse> = expandoObject({
  batchjob: ['batchjob', lazy(() => batchJobSchema)],
});
