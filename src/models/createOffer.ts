/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  expandoObject,
  lazy,
  number,
  optional,
  Schema,
  string,
} from '../schema';
import {
  CreateOfferComponent,
  createOfferComponentSchema,
} from './createOfferComponent';

export interface CreateOffer {
  name: string;
  handle: string;
  description?: string;
  productId: number;
  productPricePointId?: number;
  components?: CreateOfferComponent[];
  coupons?: string[];
  [key: string]: unknown;
}

export const createOfferSchema: Schema<CreateOffer> = expandoObject({
  name: ['name', string()],
  handle: ['handle', string()],
  description: ['description', optional(string())],
  productId: ['product_id', number()],
  productPricePointId: ['product_price_point_id', optional(number())],
  components: [
    'components',
    optional(array(lazy(() => createOfferComponentSchema))),
  ],
  coupons: ['coupons', optional(array(string()))],
});
