/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '../core';
import {
  ComponentAllocationErrorItem,
} from '../models/componentAllocationErrorItem';

/**
 * Creates an instance of ComponentAllocation
 */
interface ComponentAllocation {
  errors?: ComponentAllocationErrorItem[];
}

export class ComponentAllocationError extends ApiError<ComponentAllocation> {}
