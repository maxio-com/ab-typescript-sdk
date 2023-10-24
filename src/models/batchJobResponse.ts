/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema } from '../schema';
import { BatchJob, batchJobSchema } from './batchJob';

export interface BatchJobResponse {
  batchjob: BatchJob;
}

export const batchJobResponseSchema: Schema<BatchJobResponse> = object({
  batchjob: ['batchjob', lazy(() => batchJobSchema)],
});
