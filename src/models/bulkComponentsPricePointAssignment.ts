/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, expandoObject, lazy, optional, Schema } from '../schema';
import {
  ComponentPricePointAssignment,
  componentPricePointAssignmentSchema,
} from './componentPricePointAssignment';

export interface BulkComponentsPricePointAssignment {
  components?: ComponentPricePointAssignment[];
  [key: string]: unknown;
}

export const bulkComponentsPricePointAssignmentSchema: Schema<BulkComponentsPricePointAssignment> = expandoObject(
  {
    components: [
      'components',
      optional(array(lazy(() => componentPricePointAssignmentSchema))),
    ],
  }
);
