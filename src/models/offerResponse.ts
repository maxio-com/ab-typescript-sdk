/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, optional, Schema } from '../schema';
import { Offer, offerSchema } from './offer';

export interface OfferResponse {
  offer?: Offer;
  [key: string]: unknown;
}

export const offerResponseSchema: Schema<OfferResponse> = expandoObject({
  offer: ['offer', optional(lazy(() => offerSchema))],
});
