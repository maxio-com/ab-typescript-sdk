/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, expandoObject, lazy, optional, Schema } from '../schema.js';
import {
  SubscriptionComponentCustomPriceSegmentSegmentProperty10Value,
  subscriptionComponentCustomPriceSegmentSegmentProperty10ValueSchema,
} from './containers/subscriptionComponentCustomPriceSegmentSegmentProperty10Value.js';
import {
  SubscriptionComponentCustomPriceSegmentSegmentProperty1Value,
  subscriptionComponentCustomPriceSegmentSegmentProperty1ValueSchema,
} from './containers/subscriptionComponentCustomPriceSegmentSegmentProperty1Value.js';
import {
  SubscriptionComponentCustomPriceSegmentSegmentProperty2Value,
  subscriptionComponentCustomPriceSegmentSegmentProperty2ValueSchema,
} from './containers/subscriptionComponentCustomPriceSegmentSegmentProperty2Value.js';
import {
  SubscriptionComponentCustomPriceSegmentSegmentProperty3Value,
  subscriptionComponentCustomPriceSegmentSegmentProperty3ValueSchema,
} from './containers/subscriptionComponentCustomPriceSegmentSegmentProperty3Value.js';
import {
  SubscriptionComponentCustomPriceSegmentSegmentProperty4Value,
  subscriptionComponentCustomPriceSegmentSegmentProperty4ValueSchema,
} from './containers/subscriptionComponentCustomPriceSegmentSegmentProperty4Value.js';
import {
  SubscriptionComponentCustomPriceSegmentSegmentProperty5Value,
  subscriptionComponentCustomPriceSegmentSegmentProperty5ValueSchema,
} from './containers/subscriptionComponentCustomPriceSegmentSegmentProperty5Value.js';
import {
  SubscriptionComponentCustomPriceSegmentSegmentProperty6Value,
  subscriptionComponentCustomPriceSegmentSegmentProperty6ValueSchema,
} from './containers/subscriptionComponentCustomPriceSegmentSegmentProperty6Value.js';
import {
  SubscriptionComponentCustomPriceSegmentSegmentProperty7Value,
  subscriptionComponentCustomPriceSegmentSegmentProperty7ValueSchema,
} from './containers/subscriptionComponentCustomPriceSegmentSegmentProperty7Value.js';
import {
  SubscriptionComponentCustomPriceSegmentSegmentProperty8Value,
  subscriptionComponentCustomPriceSegmentSegmentProperty8ValueSchema,
} from './containers/subscriptionComponentCustomPriceSegmentSegmentProperty8Value.js';
import {
  SubscriptionComponentCustomPriceSegmentSegmentProperty9Value,
  subscriptionComponentCustomPriceSegmentSegmentProperty9ValueSchema,
} from './containers/subscriptionComponentCustomPriceSegmentSegmentProperty9Value.js';
import {
  CreateOrUpdateSegmentPrice,
  createOrUpdateSegmentPriceSchema,
} from './createOrUpdateSegmentPrice.js';
import { PricingScheme, pricingSchemeSchema } from './pricingScheme.js';

/**
 * Custom rates for one segment of an event-based component, set on the subscription through `custom_price.segments`.
 * Identify the segment by the property values that occur in your events, in the same positions as the segmenting properties defined on the component's meter. Each segment in a request must have a unique combination of property values.
 * Property values are matched against your events as text. Send values for boolean segmenting properties as the strings `"true"` and `"false"`: JSON booleans are not supported here, and a segment whose only property value is `false` is rejected with a 422.
 */
export interface SubscriptionComponentCustomPriceSegment {
  /** A value that will occur in your events that you want to bill upon. For a boolean segmenting property, send the value as a string, `"true"` or `"false"`. */
  segmentProperty1Value?: SubscriptionComponentCustomPriceSegmentSegmentProperty1Value;
  /** A value that will occur in your events that you want to bill upon. For a boolean segmenting property, send the value as a string, `"true"` or `"false"`. */
  segmentProperty2Value?: SubscriptionComponentCustomPriceSegmentSegmentProperty2Value;
  /** A value that will occur in your events that you want to bill upon. For a boolean segmenting property, send the value as a string, `"true"` or `"false"`. */
  segmentProperty3Value?: SubscriptionComponentCustomPriceSegmentSegmentProperty3Value;
  /** A value that will occur in your events that you want to bill upon. For a boolean segmenting property, send the value as a string, `"true"` or `"false"`. */
  segmentProperty4Value?: SubscriptionComponentCustomPriceSegmentSegmentProperty4Value;
  /** A value that will occur in your events that you want to bill upon. For a boolean segmenting property, send the value as a string, `"true"` or `"false"`. */
  segmentProperty5Value?: SubscriptionComponentCustomPriceSegmentSegmentProperty5Value;
  /** A value that will occur in your events that you want to bill upon. For a boolean segmenting property, send the value as a string, `"true"` or `"false"`. */
  segmentProperty6Value?: SubscriptionComponentCustomPriceSegmentSegmentProperty6Value;
  /** A value that will occur in your events that you want to bill upon. For a boolean segmenting property, send the value as a string, `"true"` or `"false"`. */
  segmentProperty7Value?: SubscriptionComponentCustomPriceSegmentSegmentProperty7Value;
  /** A value that will occur in your events that you want to bill upon. For a boolean segmenting property, send the value as a string, `"true"` or `"false"`. */
  segmentProperty8Value?: SubscriptionComponentCustomPriceSegmentSegmentProperty8Value;
  /** A value that will occur in your events that you want to bill upon. For a boolean segmenting property, send the value as a string, `"true"` or `"false"`. */
  segmentProperty9Value?: SubscriptionComponentCustomPriceSegmentSegmentProperty9Value;
  /** A value that will occur in your events that you want to bill upon. For a boolean segmenting property, send the value as a string, `"true"` or `"false"`. */
  segmentProperty10Value?: SubscriptionComponentCustomPriceSegmentSegmentProperty10Value;
  /** The identifier for the pricing scheme. See [Product Components](https://help.chargify.com/products/product-components.html) for an overview of pricing schemes. */
  pricingScheme: PricingScheme;
  /** The rates for this segment. Use one price for a flat rate, or several price brackets for a tiered, volume or stairstep scheme. */
  prices: CreateOrUpdateSegmentPrice[];
  [key: string]: unknown;
}

export const subscriptionComponentCustomPriceSegmentSchema: Schema<SubscriptionComponentCustomPriceSegment> = lazy(
  () =>
    expandoObject({
      segmentProperty1Value: [
        'segment_property_1_value',
        optional(
          subscriptionComponentCustomPriceSegmentSegmentProperty1ValueSchema
        ),
      ],
      segmentProperty2Value: [
        'segment_property_2_value',
        optional(
          subscriptionComponentCustomPriceSegmentSegmentProperty2ValueSchema
        ),
      ],
      segmentProperty3Value: [
        'segment_property_3_value',
        optional(
          subscriptionComponentCustomPriceSegmentSegmentProperty3ValueSchema
        ),
      ],
      segmentProperty4Value: [
        'segment_property_4_value',
        optional(
          subscriptionComponentCustomPriceSegmentSegmentProperty4ValueSchema
        ),
      ],
      segmentProperty5Value: [
        'segment_property_5_value',
        optional(
          subscriptionComponentCustomPriceSegmentSegmentProperty5ValueSchema
        ),
      ],
      segmentProperty6Value: [
        'segment_property_6_value',
        optional(
          subscriptionComponentCustomPriceSegmentSegmentProperty6ValueSchema
        ),
      ],
      segmentProperty7Value: [
        'segment_property_7_value',
        optional(
          subscriptionComponentCustomPriceSegmentSegmentProperty7ValueSchema
        ),
      ],
      segmentProperty8Value: [
        'segment_property_8_value',
        optional(
          subscriptionComponentCustomPriceSegmentSegmentProperty8ValueSchema
        ),
      ],
      segmentProperty9Value: [
        'segment_property_9_value',
        optional(
          subscriptionComponentCustomPriceSegmentSegmentProperty9ValueSchema
        ),
      ],
      segmentProperty10Value: [
        'segment_property_10_value',
        optional(
          subscriptionComponentCustomPriceSegmentSegmentProperty10ValueSchema
        ),
      ],
      pricingScheme: ['pricing_scheme', pricingSchemeSchema],
      prices: ['prices', array(createOrUpdateSegmentPriceSchema)],
    })
);
