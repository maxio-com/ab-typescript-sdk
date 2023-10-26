/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  lazy,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import {
  SegmentSegmentProperty1Value,
  segmentSegmentProperty1ValueSchema,
} from './containers/segmentSegmentProperty1Value';
import {
  SegmentSegmentProperty2Value,
  segmentSegmentProperty2ValueSchema,
} from './containers/segmentSegmentProperty2Value';
import {
  SegmentSegmentProperty3Value,
  segmentSegmentProperty3ValueSchema,
} from './containers/segmentSegmentProperty3Value';
import {
  SegmentSegmentProperty4Value,
  segmentSegmentProperty4ValueSchema,
} from './containers/segmentSegmentProperty4Value';
import { SegmentPrice, segmentPriceSchema } from './segmentPrice';

export interface Segment {
  id?: number;
  componentId?: number;
  pricePointId?: number;
  eventBasedBillingMetricId?: number;
  pricingScheme?: string;
  segmentProperty1Value?: SegmentSegmentProperty1Value;
  segmentProperty2Value?: SegmentSegmentProperty2Value;
  segmentProperty3Value?: SegmentSegmentProperty3Value;
  segmentProperty4Value?: SegmentSegmentProperty4Value;
  createdAt?: string;
  updatedAt?: string;
  prices?: SegmentPrice[];
}

export const segmentSchema: Schema<Segment> = object({
  id: ['id', optional(number())],
  componentId: ['component_id', optional(number())],
  pricePointId: ['price_point_id', optional(number())],
  eventBasedBillingMetricId: [
    'event_based_billing_metric_id',
    optional(number()),
  ],
  pricingScheme: ['pricing_scheme', optional(string())],
  segmentProperty1Value: [
    'segment_property_1_value',
    optional(segmentSegmentProperty1ValueSchema),
  ],
  segmentProperty2Value: [
    'segment_property_2_value',
    optional(segmentSegmentProperty2ValueSchema),
  ],
  segmentProperty3Value: [
    'segment_property_3_value',
    optional(segmentSegmentProperty3ValueSchema),
  ],
  segmentProperty4Value: [
    'segment_property_4_value',
    optional(segmentSegmentProperty4ValueSchema),
  ],
  createdAt: ['created_at', optional(string())],
  updatedAt: ['updated_at', optional(string())],
  prices: ['prices', optional(array(lazy(() => segmentPriceSchema)))],
});
