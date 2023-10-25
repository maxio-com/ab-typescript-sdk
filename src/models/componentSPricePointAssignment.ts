/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, optional, Schema } from '../schema';
import {
  ComponentSPricePointAssignmentPricePoint,
  componentSPricePointAssignmentPricePointSchema,
} from './containers/componentSPricePointAssignmentPricePoint';

export interface ComponentSPricePointAssignment {
  componentId?: number;
  pricePoint?: ComponentSPricePointAssignmentPricePoint;
}

export const componentSPricePointAssignmentSchema: Schema<ComponentSPricePointAssignment> = object(
  {
    componentId: ['component_id', optional(number())],
    pricePoint: [
      'price_point',
      optional(componentSPricePointAssignmentPricePointSchema),
    ],
  }
);
