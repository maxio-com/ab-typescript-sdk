/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '../core';
import {
  ComponentPricePointErrorItem,
} from '../models/componentPricePointErrorItem';

/**
 * Creates an instance of ComponentPricePoint
 */
interface ComponentPricePoint {
  errors?: ComponentPricePointErrorItem[];
}

export class ComponentPricePointError extends ApiError<ComponentPricePoint> {}
