/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, expandoObject, lazy, optional, Schema } from '../schema.js';
import { Offer, offerSchema } from './offer.js';

export interface ListOffersResponse {
  offers?: Offer[];
  [key: string]: unknown;
}

export const listOffersResponseSchema: Schema<ListOffersResponse> = lazy(() =>
  expandoObject({ offers: ['offers', optional(array(offerSchema))] })
);
