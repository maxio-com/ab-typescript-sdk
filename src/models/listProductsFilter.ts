/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { boolean, expandoObject, lazy, optional, Schema } from '../schema';
import {
  PrepaidProductPricePointFilter,
  prepaidProductPricePointFilterSchema,
} from './prepaidProductPricePointFilter';

export interface ListProductsFilter {
  /** Allows fetching products only if a prepaid product price point is present or not. To use this filter you also have to include the following param in the request `include=prepaid_product_price_point`. Use in query `filter[prepaid_product_price_point][product_price_point_id]=not_null`. */
  prepaidProductPricePoint?: PrepaidProductPricePointFilter;
  /** Allows fetching products with matching use_site_exchange_rate based on provided value (refers to default price point). Use in query `filter[use_site_exchange_rate]=true`. */
  useSiteExchangeRate?: boolean;
  [key: string]: unknown;
}

export const listProductsFilterSchema: Schema<ListProductsFilter> = expandoObject(
  {
    prepaidProductPricePoint: [
      'prepaid_product_price_point',
      optional(lazy(() => prepaidProductPricePointFilterSchema)),
    ],
    useSiteExchangeRate: ['use_site_exchange_rate', optional(boolean())],
  }
);
