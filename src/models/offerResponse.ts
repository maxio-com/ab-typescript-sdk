/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, optional, Schema } from '../schema.js';
import { Offer, offerSchema } from './offer.js';

export interface OfferResponse {
  offer?: Offer;
  [key: string]: unknown;
}

export const offerResponseSchema: Schema<OfferResponse> = lazy(() =>
  expandoObject({ offer: ['offer', optional(offerSchema)] })
);
