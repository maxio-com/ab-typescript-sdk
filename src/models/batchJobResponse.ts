/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema.js';
import { BatchJob, batchJobSchema } from './batchJob.js';

export interface BatchJobResponse {
  batchjob: BatchJob;
  [key: string]: unknown;
}

export const batchJobResponseSchema: Schema<BatchJobResponse> = lazy(() =>
  expandoObject({ batchjob: ['batchjob', batchJobSchema] })
);
