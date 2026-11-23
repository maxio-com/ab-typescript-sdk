/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '../core.js';
import { SegmentPricePointErrorDetails } from '../models/segmentPricePointErrorDetails.js';

/**
 * Creates an instance of SegmentPricePointErrors
 */
interface SegmentPricePointErrors {
  /** Price-point validation error details for segment writes. */
  errors: SegmentPricePointErrorDetails;
  [key: string]: unknown;
}

export class SegmentPricePointErrorsError extends ApiError<
  SegmentPricePointErrors
> {}
