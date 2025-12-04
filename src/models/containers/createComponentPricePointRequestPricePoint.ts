/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  anyOf,
  isMappedValueValidForSchema,
  lazy,
  Schema,
} from '../../schema.js';
import {
  CreateComponentPricePoint,
  createComponentPricePointSchema,
} from '../createComponentPricePoint.js';
import {
  CreatePrepaidUsageComponentPricePoint,
  createPrepaidUsageComponentPricePointSchema,
} from '../createPrepaidUsageComponentPricePoint.js';

/** This is a container type for any-of types. */
export type CreateComponentPricePointRequestPricePoint =
  | CreateComponentPricePoint
  | CreatePrepaidUsageComponentPricePoint;

export const createComponentPricePointRequestPricePointSchema: Schema<CreateComponentPricePointRequestPricePoint> = lazy(
  () =>
    anyOf([
      createComponentPricePointSchema,
      createPrepaidUsageComponentPricePointSchema,
    ])
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
    return isMappedValueValidForSchema(value, createComponentPricePointSchema);
  }

  /**
   * Validation method to narrow down union type to CreatePrepaidUsageComponentPricePoint type case.
   *
   * This is Create Prepaid Usage Component Price Point case.
   */
  export function isCreatePrepaidUsageComponentPricePoint(
    value: unknown
  ): value is CreatePrepaidUsageComponentPricePoint {
    return isMappedValueValidForSchema(
      value,
      createPrepaidUsageComponentPricePointSchema
    );
  }
}
