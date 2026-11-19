/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, lazy, optional, Schema } from '../schema.js';
import {
  ComponentPricePointAssignmentComponentId,
  componentPricePointAssignmentComponentIdSchema,
} from './containers/componentPricePointAssignmentComponentId.js';
import {
  ComponentPricePointAssignmentPricePoint,
  componentPricePointAssignmentPricePointSchema,
} from './containers/componentPricePointAssignmentPricePoint.js';

export interface ComponentPricePointAssignment {
  /** The component to update. Pass the component ID as an integer, or the component handle as a string with the `handle:` prefix, for example `handle:my-component`. The response returns the value in the same form that you sent. */
  componentId?: ComponentPricePointAssignmentComponentId;
  pricePoint?: ComponentPricePointAssignmentPricePoint;
  [key: string]: unknown;
}

export const componentPricePointAssignmentSchema: Schema<ComponentPricePointAssignment> = lazy(
  () =>
    expandoObject({
      componentId: [
        'component_id',
        optional(componentPricePointAssignmentComponentIdSchema),
      ],
      pricePoint: [
        'price_point',
        optional(componentPricePointAssignmentPricePointSchema),
      ],
    })
);
