/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, expandoObject, lazy, optional, Schema } from '../schema';
import { Offer, offerSchema } from './offer';

export interface ListOffersResponse {
  offers?: Offer[];
  [key: string]: unknown;
}

export const listOffersResponseSchema: Schema<ListOffersResponse> = expandoObject(
  { offers: ['offers', optional(array(lazy(() => offerSchema)))] }
);
