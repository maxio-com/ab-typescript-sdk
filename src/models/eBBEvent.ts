/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import { ChargifyEBB, chargifyEBBSchema } from './chargifyEBB';

export interface EBBEvent {
  chargify?: ChargifyEBB;
}

export const eBBEventSchema: Schema<EBBEvent> = object({
  chargify: ['chargify', optional(lazy(() => chargifyEBBSchema))],
});
