/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  bigint,
  boolean,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import { IntervalUnit, intervalUnitSchema } from './intervalUnit';

export interface CreateOrUpdateProduct {
  /** The product name */
  name: string;
  /** The product API handle */
  handle?: string;
  /** The product description */
  description: string;
  /** E.g. Internal ID or SKU Number */
  accountingCode?: string;
  /** Deprecated value that can be ignored unless you have legacy hosted pages. For Public Signup Page users, please read this attribute from under the signup page. */
  requireCreditCard?: boolean;
  /** The product price, in integer cents */
  priceInCents: bigint;
  /** The numerical interval. i.e. an interval of ‘30’ coupled with an interval_unit of day would mean this product would renew every 30 days */
  interval: number;
  /** A string representing the interval unit for this product, either month or day */
  intervalUnit: IntervalUnit;
  /** The product trial price, in integer cents */
  trialPriceInCents?: bigint;
  /** The numerical trial interval. i.e. an interval of ‘30’ coupled with a trial_interval_unit of day would mean this product trial would last 30 days. */
  trialInterval?: number;
  /** A string representing the trial interval unit for this product, either month or day */
  trialIntervalUnit?: IntervalUnit;
  trialType?: string;
  /** The numerical expiration interval. i.e. an expiration_interval of ‘30’ coupled with an expiration_interval_unit of day would mean this product would expire after 30 days. */
  expirationInterval?: number;
  /** A string representing the expiration interval unit for this product, either month or day */
  expirationIntervalUnit?: IntervalUnit;
  autoCreateSignupPage?: boolean;
  /** A string representing the tax code related to the product type. This is especially important when using the Avalara service to tax based on locale. This attribute has a max length of 10 characters. */
  taxCode?: string;
}

export const createOrUpdateProductSchema: Schema<CreateOrUpdateProduct> = object(
  {
    name: ['name', string()],
    handle: ['handle', optional(string())],
    description: ['description', string()],
    accountingCode: ['accounting_code', optional(string())],
    requireCreditCard: ['require_credit_card', optional(boolean())],
    priceInCents: ['price_in_cents', bigint()],
    interval: ['interval', number()],
    intervalUnit: ['interval_unit', intervalUnitSchema],
    trialPriceInCents: ['trial_price_in_cents', optional(bigint())],
    trialInterval: ['trial_interval', optional(number())],
    trialIntervalUnit: ['trial_interval_unit', optional(intervalUnitSchema)],
    trialType: ['trial_type', optional(string())],
    expirationInterval: ['expiration_interval', optional(number())],
    expirationIntervalUnit: [
      'expiration_interval_unit',
      optional(intervalUnitSchema),
    ],
    autoCreateSignupPage: ['auto_create_signup_page', optional(boolean())],
    taxCode: ['tax_code', optional(string())],
  }
);
