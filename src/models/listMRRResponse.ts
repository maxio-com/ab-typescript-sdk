/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema } from '../schema';
import {
  ListMRRResponseResult,
  listMRRResponseResultSchema,
} from './listMRRResponseResult';

export interface ListMRRResponse {
  mrr: ListMRRResponseResult;
}

export const listMRRResponseSchema: Schema<ListMRRResponse> = object({
  mrr: ['mrr', lazy(() => listMRRResponseResultSchema)],
});
