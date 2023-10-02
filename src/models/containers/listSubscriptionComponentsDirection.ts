/**
 * Maxio Advanced Billing formerly Chargify APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { oneOf, Schema, validateAndMap } from '../../schema';
import {
  SortingDirectionEnum,
  sortingDirectionEnumSchema,
} from '../sortingDirectionEnum';

/** This is a container type for one-of types. */
export type ListSubscriptionComponentsDirection = SortingDirectionEnum;

export const listSubscriptionComponentsDirectionSchema: Schema<ListSubscriptionComponentsDirection> = oneOf(
  [sortingDirectionEnumSchema]
);

export namespace ListSubscriptionComponentsDirection {
  /**
  * Validation method to narrow down union type to SortingDirectionEnum type case.
  *
  * This is Sorting direction case.
  */
  export function isSortingDirectionEnum(value: unknown): value is SortingDirectionEnum {
    const validationResult = validateAndMap(value, sortingDirectionEnumSchema);
    return validationResult.errors === false;
  }
}
