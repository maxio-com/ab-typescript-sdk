/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  boolean,
  expandoObject,
  lazy,
  nullable,
  number,
  optional,
  Schema,
} from '../schema.js';
import {
  ExpirationIntervalUnit,
  expirationIntervalUnitSchema,
} from './expirationIntervalUnit.js';
import { IntervalUnit, intervalUnitSchema } from './intervalUnit.js';
import { Price, priceSchema } from './price.js';
import { PricingScheme, pricingSchemeSchema } from './pricingScheme.js';
import {
  SubscriptionComponentCustomPriceSegment,
  subscriptionComponentCustomPriceSegmentSchema,
} from './subscriptionComponentCustomPriceSegment.js';

/** Create or update custom pricing unique to the subscription. Used in place of `price_point_id`. */
export interface ComponentCustomPrice {
  /** Whether or not the price point includes tax */
  taxIncluded?: boolean;
  /** Omit for On/Off components. */
  pricingScheme?: PricingScheme;
  /** The numerical interval. e.g., an interval of ‘30’ coupled with an interval_unit of day would mean this component price point would renew every 30 days. This property is only available for sites with Multifrequency enabled. */
  interval?: number;
  /** A string representing the interval unit for this component price point, either month or day. This property is only available for sites with Multifrequency enabled. */
  intervalUnit?: IntervalUnit | null;
  /**
   * (Optional) Id of the price point to use for list price calculations when
   * overriding the customer price.
   */
  listPricePointId?: number | null;
  /** (Optional) When list vs sales pricing is enabled and `list_price_point_id` is omitted, the component's default price point is used as the list price unless this is `false`. Defaults to `true`. */
  useDefaultListPrice?: boolean;
  /** On/off components only need one price bracket starting at 1. */
  prices: Price[];
  /** Applicable only to prepaid usage components. Controls whether the allocated quantity renews each period. */
  renewPrepaidAllocation?: boolean;
  /** Applicable only to prepaid usage components. Controls whether remaining units roll over to the next period. */
  rolloverPrepaidRemainder?: boolean;
  /** Applicable only when rollover is enabled. Number of `expiration_interval_unit`s after which rollover amounts expire. */
  expirationInterval?: number | null;
  /** Applicable only when rollover is enabled. Interval unit for rollover expiration (month or day). */
  expirationIntervalUnit?: ExpirationIntervalUnit | null;
  /**
   * Applicable only to segmented event-based components on sites using Maxio Metering. Per-segment rates for the component: each entry sets the pricing scheme and prices for one segment of the component's meter, identified by its property values.
   * Accepted only by Create Subscription and Update Subscription, which save the segment rates. Preview Subscription and the signup proforma invoice endpoints validate segments the same way but do not save them. Every other endpoint that accepts a component `custom_price` returns `422 Unprocessable Entity` when the `segments` key is present, even when its value is `null` or an empty array. Omit this property unless you are setting segment rates.
   * Saved segment rates take effect as soon as the request succeeds and price all of the current billing period's usage at the new rates, including usage recorded before the request. To read them back, take the `price_point_id` of the subscription's component (for example, from [Read Subscription Component]($e/Subscription%20Components/readSubscriptionComponent)) and call `GET /components/{component_id}/price_points/{price_point_id}/segments.json`.
   */
  segments?: SubscriptionComponentCustomPriceSegment[];
  [key: string]: unknown;
}

export const componentCustomPriceSchema: Schema<ComponentCustomPrice> = lazy(
  () =>
    expandoObject({
      taxIncluded: ['tax_included', optional(boolean())],
      pricingScheme: ['pricing_scheme', optional(pricingSchemeSchema)],
      interval: ['interval', optional(number())],
      intervalUnit: ['interval_unit', optional(nullable(intervalUnitSchema))],
      listPricePointId: ['list_price_point_id', optional(nullable(number()))],
      useDefaultListPrice: ['use_default_list_price', optional(boolean())],
      prices: ['prices', array(priceSchema)],
      renewPrepaidAllocation: ['renew_prepaid_allocation', optional(boolean())],
      rolloverPrepaidRemainder: [
        'rollover_prepaid_remainder',
        optional(boolean()),
      ],
      expirationInterval: ['expiration_interval', optional(nullable(number()))],
      expirationIntervalUnit: [
        'expiration_interval_unit',
        optional(nullable(expirationIntervalUnitSchema)),
      ],
      segments: [
        'segments',
        optional(array(subscriptionComponentCustomPriceSegmentSchema)),
      ],
    })
);
