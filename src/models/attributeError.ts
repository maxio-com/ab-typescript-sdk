/**
 * Maxio Advanced BillingLib
 *
 * This file was automatically generated for Maxio by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, object, Schema, string } from '../schema';

export interface AttributeError {
  attribute: string[];
}

export const attributeErrorSchema: Schema<AttributeError> = object({
  attribute: ['attribute', array(string())],
});
