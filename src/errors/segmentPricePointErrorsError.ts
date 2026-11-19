/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '../core.js';
import { Errors } from '../models/errors.js';

/**
 * Creates an instance of SegmentPricePointErrors
 */
interface SegmentPricePointErrors {
  errors: Errors;
  [key: string]: unknown;
}

export class SegmentPricePointErrorsError extends ApiError<
  SegmentPricePointErrors
> {}
