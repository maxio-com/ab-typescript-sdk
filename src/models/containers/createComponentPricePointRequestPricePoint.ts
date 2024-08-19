/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { anyOf, Schema, validateAndMap } from '../../schema';
import {
  CreateComponentPricePoint,
  createComponentPricePointSchema,
} from '../createComponentPricePoint';
import {
  CreatePrepaidUsageComponentPricePoint,
  createPrepaidUsageComponentPricePointSchema,
} from '../createPrepaidUsageComponentPricePoint';

/** This is a container type for any-of types. */
export type CreateComponentPricePointRequestPricePoint =
  | CreateComponentPricePoint
  | CreatePrepaidUsageComponentPricePoint;

export const createComponentPricePointRequestPricePointSchema: Schema<CreateComponentPricePointRequestPricePoint> = anyOf(
  [createComponentPricePointSchema, createPrepaidUsageComponentPricePointSchema]
);

export namespace CreateComponentPricePointRequestPricePoint {
  /**
   * Validation method to narrow down union type to CreateComponentPricePoint type case.
   *
   * This is Create Component Price Point case.
   */
  export function isCreateComponentPricePoint(
    value: unknown
  ): value is CreateComponentPricePoint {
    const validationResult = validateAndMap(
      value,
      createComponentPricePointSchema
    );
    return validationResult.errors === false;
  }

  /**
   * Validation method to narrow down union type to CreatePrepaidUsageComponentPricePoint type case.
   *
   * This is Create Prepaid Usage Component Price Point case.
   */
  export function isCreatePrepaidUsageComponentPricePoint(
    value: unknown
  ): value is CreatePrepaidUsageComponentPricePoint {
    const validationResult = validateAndMap(
      value,
      createPrepaidUsageComponentPricePointSchema
    );
    return validationResult.errors === false;
  }
}
