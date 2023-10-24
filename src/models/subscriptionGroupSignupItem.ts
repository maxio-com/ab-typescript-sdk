/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  boolean,
  dict,
  lazy,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import { CalendarBilling, calendarBillingSchema } from './calendarBilling';
import {
  CustomPriceUsedForSubscriptionCreateUpdate,
  customPriceUsedForSubscriptionCreateUpdateSchema,
} from './customPriceUsedForSubscriptionCreateUpdate';
import {
  SubscriptionGroupSignupComponent,
  subscriptionGroupSignupComponentSchema,
} from './subscriptionGroupSignupComponent';

export interface SubscriptionGroupSignupItem {
  /** The API Handle of the product for which you are creating a subscription. Required, unless a `product_id` is given instead. */
  productHandle?: string;
  /** The Product ID of the product for which you are creating a subscription. You can pass either `product_id` or `product_handle`. */
  productId?: number;
  /** The ID of the particular price point on the product. */
  productPricePointId?: number;
  /** The user-friendly API handle of a product's particular price point. */
  productPricePointHandle?: string;
  /** Use in place of passing product and component information to set up the subscription with an existing offer. May be either the Chargify ID of the offer or its handle prefixed with `handle:` */
  offerId?: number;
  /** The reference value (provided by your app) for the subscription itelf. */
  reference?: string;
  /** One of the subscriptions must be marked as primary in the group. */
  primary?: boolean;
  /** (Optional) If Multi-Currency is enabled and the currency is configured in Chargify, pass it at signup to create a subscription on a non-default currency. Note that you cannot update the currency of an existing subscription. */
  currency?: string;
  /** An array for all the coupons attached to the subscription. */
  couponCodes?: string[];
  components?: SubscriptionGroupSignupComponent[];
  /** (Optional) Used in place of `product_price_point_id` to define a custom price point unique to the subscription */
  customPrice?: CustomPriceUsedForSubscriptionCreateUpdate;
  /** (Optional). Cannot be used when also specifying next_billing_at */
  calendarBilling?: CalendarBilling;
  /** (Optional) A set of key/value pairs representing custom fields and their values. Metafields will be created “on-the-fly” in your site for a given key, if they have not been created yet. */
  metafields?: Record<string, string>;
}

export const subscriptionGroupSignupItemSchema: Schema<SubscriptionGroupSignupItem> = object(
  {
    productHandle: ['product_handle', optional(string())],
    productId: ['product_id', optional(number())],
    productPricePointId: ['product_price_point_id', optional(number())],
    productPricePointHandle: ['product_price_point_handle', optional(string())],
    offerId: ['offer_id', optional(number())],
    reference: ['reference', optional(string())],
    primary: ['primary', optional(boolean())],
    currency: ['currency', optional(string())],
    couponCodes: ['coupon_codes', optional(array(string()))],
    components: [
      'components',
      optional(array(lazy(() => subscriptionGroupSignupComponentSchema))),
    ],
    customPrice: [
      'custom_price',
      optional(lazy(() => customPriceUsedForSubscriptionCreateUpdateSchema)),
    ],
    calendarBilling: [
      'calendar_billing',
      optional(lazy(() => calendarBillingSchema)),
    ],
    metafields: ['metafields', optional(dict(string()))],
  }
);
