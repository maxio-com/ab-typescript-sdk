/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, expandoObject, Schema, string } from '../schema.js';

/** The key of the object would be a number (an index in the request array) where the error occurred. In the value object, the key represents the field and the value is an array with error messages. In most cases, this object would contain just one key. */
export interface EventBasedBillingSegmentSingleError {
  pricePoint: string[];
  [key: string]: unknown;
}

export const eventBasedBillingSegmentSingleErrorSchema: Schema<EventBasedBillingSegmentSingleError> = expandoObject(
  { pricePoint: ['price_point', array(string())] }
);
