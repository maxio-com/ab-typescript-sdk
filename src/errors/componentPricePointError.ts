/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '../core.js';
import { ComponentPricePointErrorItem } from '../models/componentPricePointErrorItem.js';

/**
 * Creates an instance of ComponentPricePoint
 */
interface ComponentPricePoint {
  errors?: ComponentPricePointErrorItem[];
  [key: string]: unknown;
}

export class ComponentPricePointError extends ApiError<ComponentPricePoint> {}
