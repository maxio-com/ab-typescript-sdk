/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '../core.js';
import { ComponentAllocationErrorItem } from '../models/componentAllocationErrorItem.js';

/**
 * Creates an instance of ComponentAllocation
 */
interface ComponentAllocation {
  errors?: ComponentAllocationErrorItem[];
  [key: string]: unknown;
}

export class ComponentAllocationError extends ApiError<ComponentAllocation> {}
