/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  expandoObject,
  nullable,
  number,
  optional,
  Schema,
  string,
} from '../schema';

export interface BatchJob {
  id?: number;
  finishedAt?: string | null;
  rowCount?: number | null;
  createdAt?: string | null;
  completed?: string;
  [key: string]: unknown;
}

export const batchJobSchema: Schema<BatchJob> = expandoObject({
  id: ['id', optional(number())],
  finishedAt: ['finished_at', optional(nullable(string()))],
  rowCount: ['row_count', optional(nullable(number()))],
  createdAt: ['created_at', optional(nullable(string()))],
  completed: ['completed', optional(string())],
});
