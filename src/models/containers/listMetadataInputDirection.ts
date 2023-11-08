/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { oneOf, Schema, validateAndMap } from '../../schema';
import { SortingDirection, sortingDirectionSchema } from '../sortingDirection';

/** This is a container type for one-of types. */
export type ListMetadataInputDirection = SortingDirection;

export const listMetadataInputDirectionSchema: Schema<ListMetadataInputDirection> = oneOf(
  [sortingDirectionSchema]
);

export namespace ListMetadataInputDirection {
  /**
  * Validation method to narrow down union type to SortingDirection type case.
  *
  * This is Sorting direction case.
  */
  export function isSortingDirection(value: unknown): value is SortingDirection {
    const validationResult = validateAndMap(value, sortingDirectionSchema);
    return validationResult.errors === false;
  }
}
