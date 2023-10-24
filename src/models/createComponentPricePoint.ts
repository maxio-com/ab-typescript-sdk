/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  boolean,
  lazy,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import { Price, priceSchema } from './price';

export interface CreateComponentPricePoint {
  name: string;
  handle?: string;
  pricingScheme: string;
  prices: Price[];
  /** Whether to use the site level exchange rate or define your own prices for each currency if you have multiple currencies defined on the site. */
  useSiteExchangeRate?: boolean;
}

export const createComponentPricePointSchema: Schema<CreateComponentPricePoint> = object(
  {
    name: ['name', string()],
    handle: ['handle', optional(string())],
    pricingScheme: ['pricing_scheme', string()],
    prices: ['prices', array(lazy(() => priceSchema))],
    useSiteExchangeRate: ['use_site_exchange_rate', optional(boolean())],
  }
);
