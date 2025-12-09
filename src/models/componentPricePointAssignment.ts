/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, number, optional, Schema } from '../schema.js';
import {
  ComponentPricePointAssignmentPricePoint,
  componentPricePointAssignmentPricePointSchema,
} from './containers/componentPricePointAssignmentPricePoint.js';

export interface ComponentPricePointAssignment {
  componentId?: number;
  pricePoint?: ComponentPricePointAssignmentPricePoint;
  [key: string]: unknown;
}

export const componentPricePointAssignmentSchema: Schema<ComponentPricePointAssignment> = lazy(
  () =>
    expandoObject({
      componentId: ['component_id', optional(number())],
      pricePoint: [
        'price_point',
        optional(componentPricePointAssignmentPricePointSchema),
      ],
    })
);
