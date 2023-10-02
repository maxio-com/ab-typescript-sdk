/**
 * Maxio Advanced Billing formerly Chargify APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, number, object, Schema } from '../schema';

export interface ReplayWebhooksRequest {
  ids: number[];
}

export const replayWebhooksRequestSchema: Schema<ReplayWebhooksRequest> = object(
  { ids: ['ids', array(number())] }
);
