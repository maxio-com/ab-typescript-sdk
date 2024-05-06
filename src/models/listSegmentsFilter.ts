/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, optional, Schema, string } from '../schema';

export interface ListSegmentsFilter {
  /** The value passed here would be used to filter segments. Pass a value related to `segment_property_1` on attached Metric. If empty string is passed, this filter would be rejected. Use in query `filter[segment_property_1_value]=EU`. */
  segmentProperty1Value?: string;
  /** The value passed here would be used to filter segments. Pass a value related to `segment_property_2` on attached Metric. If empty string is passed, this filter would be rejected. */
  segmentProperty2Value?: string;
  /** The value passed here would be used to filter segments. Pass a value related to `segment_property_3` on attached Metric. If empty string is passed, this filter would be rejected. */
  segmentProperty3Value?: string;
  /** The value passed here would be used to filter segments. Pass a value related to `segment_property_4` on attached Metric. If empty string is passed, this filter would be rejected. */
  segmentProperty4Value?: string;
  [key: string]: unknown;
}

export const listSegmentsFilterSchema: Schema<ListSegmentsFilter> = expandoObject(
  {
    segmentProperty1Value: ['segment_property_1_value', optional(string())],
    segmentProperty2Value: ['segment_property_2_value', optional(string())],
    segmentProperty3Value: ['segment_property_3_value', optional(string())],
    segmentProperty4Value: ['segment_property_4_value', optional(string())],
  }
);
