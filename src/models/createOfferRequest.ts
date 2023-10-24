/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema } from '../schema';
import { CreateOffer, createOfferSchema } from './createOffer';

export interface CreateOfferRequest {
  offer: CreateOffer;
}

export const createOfferRequestSchema: Schema<CreateOfferRequest> = object({
  offer: ['offer', lazy(() => createOfferSchema)],
});
