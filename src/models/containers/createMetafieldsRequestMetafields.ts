/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  isMappedValueValidForSchema,
  lazy,
  oneOf,
  Schema,
} from '../../schema.js';
import { CreateMetafield, createMetafieldSchema } from '../createMetafield.js';

/** This is a container type for one-of types. */
export type CreateMetafieldsRequestMetafields =
  | CreateMetafield
  | CreateMetafield[];

export const createMetafieldsRequestMetafieldsSchema: Schema<CreateMetafieldsRequestMetafields> = lazy(
  () => oneOf([createMetafieldSchema, array(createMetafieldSchema)])
);

export namespace CreateMetafieldsRequestMetafields {
  /**
   * Validation method to narrow down union type to CreateMetafield type case.
   *
   * This is Create Metafield case.
   */
  export function isCreateMetafield(value: unknown): value is CreateMetafield {
    return isMappedValueValidForSchema(value, createMetafieldSchema);
  }

  /**
   * Validation method to narrow down union type to CreateMetafield[] type case.
   *
   * This is Array of Create Metafield case.
   */
  export function isArrayOfCreateMetafield(
    value: unknown
  ): value is CreateMetafield[] {
    if (!Array.isArray(value)) {
      return false;
    }
    return isMappedValueValidForSchema(value, array(createMetafieldSchema));
  }
}
