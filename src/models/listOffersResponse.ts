/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema } from '../schema';
import { Offer, offerSchema } from './offer';

export interface ListOffersResponse {
  offers?: Offer[];
}

export const listOffersResponseSchema: Schema<ListOffersResponse> = object({
  offers: ['offers', optional(array(lazy(() => offerSchema)))],
});
