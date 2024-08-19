/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, bigint, expandoObject, Schema } from '../schema';

export interface ReplayWebhooksRequest {
  ids: bigint[];
  [key: string]: unknown;
}

export const replayWebhooksRequestSchema: Schema<ReplayWebhooksRequest> = expandoObject(
  { ids: ['ids', array(bigint())] }
);
