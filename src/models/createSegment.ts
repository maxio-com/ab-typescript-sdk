/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema, string } from '../schema';
import {
  CreateSegmentSegmentProperty1Value,
  createSegmentSegmentProperty1ValueSchema,
} from './containers/createSegmentSegmentProperty1Value';
import {
  CreateSegmentSegmentProperty2Value,
  createSegmentSegmentProperty2ValueSchema,
} from './containers/createSegmentSegmentProperty2Value';
import {
  CreateSegmentSegmentProperty3Value,
  createSegmentSegmentProperty3ValueSchema,
} from './containers/createSegmentSegmentProperty3Value';
import {
  CreateSegmentSegmentProperty4Value,
  createSegmentSegmentProperty4ValueSchema,
} from './containers/createSegmentSegmentProperty4Value';
import {
  CreateOrUpdateSegmentPrice,
  createOrUpdateSegmentPriceSchema,
} from './createOrUpdateSegmentPrice';

export interface CreateSegment {
  /** A value that will occur in your events that you want to bill upon. The type of the value depends on the property type in the related event based billing metric. */
  segmentProperty1Value?: CreateSegmentSegmentProperty1Value;
  /** A value that will occur in your events that you want to bill upon. The type of the value depends on the property type in the related event based billing metric. */
  segmentProperty2Value?: CreateSegmentSegmentProperty2Value;
  /** A value that will occur in your events that you want to bill upon. The type of the value depends on the property type in the related event based billing metric. */
  segmentProperty3Value?: CreateSegmentSegmentProperty3Value;
  /** A value that will occur in your events that you want to bill upon. The type of the value depends on the property type in the related event based billing metric. */
  segmentProperty4Value?: CreateSegmentSegmentProperty4Value;
  /** The handle for the pricing scheme. Available options: per_unit, volume, tiered, stairstep. See [Price Bracket Rules](https://help.chargify.com/products/product-components.html#price-bracket-rules) for an overview of pricing schemes. */
  pricingScheme: string;
  prices?: CreateOrUpdateSegmentPrice[];
}

export const createSegmentSchema: Schema<CreateSegment> = object({
  segmentProperty1Value: [
    'segment_property_1_value',
    optional(createSegmentSegmentProperty1ValueSchema),
  ],
  segmentProperty2Value: [
    'segment_property_2_value',
    optional(createSegmentSegmentProperty2ValueSchema),
  ],
  segmentProperty3Value: [
    'segment_property_3_value',
    optional(createSegmentSegmentProperty3ValueSchema),
  ],
  segmentProperty4Value: [
    'segment_property_4_value',
    optional(createSegmentSegmentProperty4ValueSchema),
  ],
  pricingScheme: ['pricing_scheme', string()],
  prices: [
    'prices',
    optional(array(lazy(() => createOrUpdateSegmentPriceSchema))),
  ],
});
