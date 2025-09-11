/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, Schema } from '../schema.js';
import { CreateOffer, createOfferSchema } from './createOffer.js';

export interface CreateOfferRequest {
  offer: CreateOffer;
  [key: string]: unknown;
}

export const createOfferRequestSchema: Schema<CreateOfferRequest> = expandoObject(
  { offer: ['offer', lazy(() => createOfferSchema)] }
);
