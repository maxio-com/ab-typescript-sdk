/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema.js';
import {
  ListMRRResponseResult,
  listMRRResponseResultSchema,
} from './listMRRResponseResult.js';

export interface ListMRRResponse {
  mrr: ListMRRResponseResult;
  [key: string]: unknown;
}

export const listMRRResponseSchema: Schema<ListMRRResponse> = expandoObject({
  mrr: ['mrr', lazy(() => listMRRResponseResultSchema)],
});
