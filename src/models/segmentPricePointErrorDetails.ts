/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, expandoObject, Schema, string } from '../schema.js';

/** Price-point validation error details for segment writes. */
export interface SegmentPricePointErrorDetails {
  pricePoint: string[];
  [key: string]: unknown;
}

export const segmentPricePointErrorDetailsSchema: Schema<SegmentPricePointErrorDetails> = expandoObject(
  { pricePoint: ['price_point', array(string())] }
);
