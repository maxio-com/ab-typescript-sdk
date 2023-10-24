/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { anyOf, array, Schema, validateAndMap } from '../../schema';
import { CreateMetafield, createMetafieldSchema } from '../createMetafield';

/** This is a container type for any-of types. */
export type CreateMetafieldsRequestMetafields = CreateMetafield | CreateMetafield[];

export const createMetafieldsRequestMetafieldsSchema: Schema<CreateMetafieldsRequestMetafields> = anyOf(
  [createMetafieldSchema, array(createMetafieldSchema)]
);

export namespace CreateMetafieldsRequestMetafields {
  /**
  * Validation method to narrow down union type to CreateMetafield type case.
  *
  * This is Create Metafield case.
  */
  export function isCreateMetafield(value: unknown): value is CreateMetafield {
    const validationResult = validateAndMap(value, createMetafieldSchema);
    return validationResult.errors === false;
  }

  /**
  * Validation method to narrow down union type to CreateMetafield[] type case.
  *
  * This is Array of Create Metafield case.
  */
  export function isArrayOfCreateMetafield(value: unknown): value is CreateMetafield[] {
    if (!Array.isArray(value))
    {
      return false;
    };
    const validationResult = validateAndMap(value, array(createMetafieldSchema));
    return validationResult.errors === false;
  }
}
