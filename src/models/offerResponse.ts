/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import { Offer, offerSchema } from './offer';

export interface OfferResponse {
  offer?: Offer;
}

export const offerResponseSchema: Schema<OfferResponse> = object({
  offer: ['offer', optional(lazy(() => offerSchema))],
});
