/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  lazy,
  nullable,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import { OfferDiscount, offerDiscountSchema } from './offerDiscount';
import { OfferItem, offerItemSchema } from './offerItem';
import { OfferSignupPage, offerSignupPageSchema } from './offerSignupPage';

export interface Offer {
  id?: number;
  siteId?: number;
  productFamilyId?: number;
  productId?: number;
  productPricePointId?: number;
  productRevisableNumber?: number;
  name?: string;
  handle?: string;
  description?: string;
  createdAt?: string;
  updatedAt?: string;
  archivedAt?: string | null;
  offerItems?: OfferItem[];
  offerDiscounts?: OfferDiscount[];
  productFamilyName?: string;
  productName?: string;
  productPricePointName?: string;
  productPriceInCents?: number;
  offerSignupPages?: OfferSignupPage[];
}

export const offerSchema: Schema<Offer> = object({
  id: ['id', optional(number())],
  siteId: ['site_id', optional(number())],
  productFamilyId: ['product_family_id', optional(number())],
  productId: ['product_id', optional(number())],
  productPricePointId: ['product_price_point_id', optional(number())],
  productRevisableNumber: ['product_revisable_number', optional(number())],
  name: ['name', optional(string())],
  handle: ['handle', optional(string())],
  description: ['description', optional(string())],
  createdAt: ['created_at', optional(string())],
  updatedAt: ['updated_at', optional(string())],
  archivedAt: ['archived_at', optional(nullable(string()))],
  offerItems: ['offer_items', optional(array(lazy(() => offerItemSchema)))],
  offerDiscounts: [
    'offer_discounts',
    optional(array(lazy(() => offerDiscountSchema))),
  ],
  productFamilyName: ['product_family_name', optional(string())],
  productName: ['product_name', optional(string())],
  productPricePointName: ['product_price_point_name', optional(string())],
  productPriceInCents: ['product_price_in_cents', optional(number())],
  offerSignupPages: [
    'offer_signup_pages',
    optional(array(lazy(() => offerSignupPageSchema))),
  ],
});
