/**
 * AdvancedBilling
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  isMappedValueValidForSchema,
  oneOf,
  Schema,
} from '../../schema.js';
import { UpdateMetafield, updateMetafieldSchema } from '../updateMetafield.js';

/** This is a container type for one-of types. */
export type UpdateMetafieldsRequestMetafields =
  | UpdateMetafield
  | UpdateMetafield[];

export const updateMetafieldsRequestMetafieldsSchema: Schema<UpdateMetafieldsRequestMetafields> = oneOf(
  [updateMetafieldSchema, array(updateMetafieldSchema)]
);

export namespace UpdateMetafieldsRequestMetafields {
  /**
   * Validation method to narrow down union type to UpdateMetafield type case.
   *
   * This is Update Metafield case.
   */
  export function isUpdateMetafield(value: unknown): value is UpdateMetafield {
    return isMappedValueValidForSchema(value, updateMetafieldSchema);
  }

  /**
   * Validation method to narrow down union type to UpdateMetafield[] type case.
   *
   * This is Array of Update Metafield case.
   */
  export function isArrayOfUpdateMetafield(
    value: unknown
  ): value is UpdateMetafield[] {
    if (!Array.isArray(value)) {
      return false;
    }
    return isMappedValueValidForSchema(value, array(updateMetafieldSchema));
  }
}
