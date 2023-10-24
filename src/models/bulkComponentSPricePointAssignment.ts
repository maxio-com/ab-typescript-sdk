/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema } from '../schema';
import {
  ComponentSPricePointAssignment,
  componentSPricePointAssignmentSchema,
} from './componentSPricePointAssignment';

export interface BulkComponentSPricePointAssignment {
  components?: ComponentSPricePointAssignment[];
}

export const bulkComponentSPricePointAssignmentSchema: Schema<BulkComponentSPricePointAssignment> = object(
  {
    components: [
      'components',
      optional(array(lazy(() => componentSPricePointAssignmentSchema))),
    ],
  }
);
