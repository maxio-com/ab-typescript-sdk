/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, optional, Schema } from '../schema';
import { ChargifyEBB, chargifyEBBSchema } from './chargifyEBB';

export interface EBBEvent {
  chargify?: ChargifyEBB;
  [key: string]: unknown;
}

export const eBBEventSchema: Schema<EBBEvent> = expandoObject({
  chargify: ['chargify', optional(lazy(() => chargifyEBBSchema))],
});
