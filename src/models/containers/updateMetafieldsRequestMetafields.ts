/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { anyOf, array, Schema, validateAndMap } from '../../schema';
import { UpdateMetafield, updateMetafieldSchema } from '../updateMetafield';

/** This is a container type for any-of types. */
export type UpdateMetafieldsRequestMetafields = UpdateMetafield | UpdateMetafield[];

export const updateMetafieldsRequestMetafieldsSchema: Schema<UpdateMetafieldsRequestMetafields> = anyOf(
  [updateMetafieldSchema, array(updateMetafieldSchema)]
);

export namespace UpdateMetafieldsRequestMetafields {
  /**
  * Validation method to narrow down union type to UpdateMetafield type case.
  *
  * This is Update Metafield case.
  */
  export function isUpdateMetafield(value: unknown): value is UpdateMetafield {
    const validationResult = validateAndMap(value, updateMetafieldSchema);
    return validationResult.errors === false;
  }

  /**
  * Validation method to narrow down union type to UpdateMetafield[] type case.
  *
  * This is Array of Update Metafield case.
  */
  export function isArrayOfUpdateMetafield(value: unknown): value is UpdateMetafield[] {
    if (!Array.isArray(value))
    {
      return false;
    };
    const validationResult = validateAndMap(value, array(updateMetafieldSchema));
    return validationResult.errors === false;
  }
}
