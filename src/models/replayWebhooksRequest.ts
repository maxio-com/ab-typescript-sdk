/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, bigint, object, Schema } from '../schema';

export interface ReplayWebhooksRequest {
  ids: bigint[];
}

export const replayWebhooksRequestSchema: Schema<ReplayWebhooksRequest> = object(
  { ids: ['ids', array(bigint())] }
);
